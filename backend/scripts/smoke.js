/* Simple smoke test for backend: checks /health, /api/health, Postgres and Redis connectivity
 * Run with: node ./scripts/smoke.js
 */

const http = require('http');
const { Client } = require('pg');
const Redis = require('ioredis');

const BACKEND = process.env.BACKEND_URL || 'http://localhost:4000';
const PG_URL = process.env.PG_URL || process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

function checkHttp(path) {
  return new Promise((res) => {
    const url = new URL(path, BACKEND);
    const req = http.get(url, (r) => {
      let data = '';
      r.on('data', (c) => data += c.toString());
      r.on('end', () => res({ status: r.statusCode, body: data }));
    });
    req.on('error', (e) => res({ error: e.message }));
    req.setTimeout(5000, () => { req.destroy(); res({ error: 'timeout' }); });
  });
}

async function checkPostgres() {
  const client = new Client({ connectionString: PG_URL });
  try {
    await client.connect();
    const r = await client.query('SELECT 1 as ok');
    await client.end();
    return { ok: true, row: r.rows[0] };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function checkRedis() {
  const r = new Redis(REDIS_URL, { connectTimeout: 2000 });
  try {
    const pong = await r.ping();
    await r.quit();
    return { ok: pong === 'PONG' };
  } catch (e) {
    try { r.disconnect(); } catch(_){}
    return { ok: false, error: e.message };
  }
}

(async function main(){
  console.log('Checking backend endpoints...');
  const h = await checkHttp('/health');
  console.log('/health ->', h.error ? ('ERROR: ' + h.error) : (`${h.status} ${h.body.slice(0,200)}...`));
  const a = await checkHttp('/api/health');
  console.log('/api/health ->', a.error ? ('ERROR: ' + a.error) : (`${a.status} ${a.body.slice(0,200)}...`));

  console.log('\nChecking Postgres...');
  const pg = await checkPostgres();
  console.log('Postgres ->', pg.ok ? `OK ${JSON.stringify(pg.row)}` : (`ERROR: ${pg.error}`));

  console.log('\nChecking Redis...');
  const rd = await checkRedis();
  console.log('Redis ->', rd.ok ? 'OK' : `ERROR: ${rd.error}`);

  const allOk = (!h.error && h.status===200) && (!a.error && a.status===200) && pg.ok && rd.ok;
  console.log('\nSMOKE RESULT ->', allOk ? 'PASS' : 'FAIL');
  process.exit(allOk ? 0 : 2);
})();

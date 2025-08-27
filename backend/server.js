const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret';

const app = express();
app.use(express.json());

// Simple in-memory/file store
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const USERS_FILE = path.join(DATA_DIR, 'users.json');
let users = [];
if (fs.existsSync(USERS_FILE)) {
  try { users = JSON.parse(fs.readFileSync(USERS_FILE)); } catch(e){ users=[]; }
}
if (!users.find(u=>u.email==='dev@local.test')) {
  const pwHash = bcrypt.hashSync('Password123!', 8);
  users.push({ id:1, email:'dev@local.test', password: pwHash, role:'admin' });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null,2));
  console.log('Seeded dev user: dev@local.test / Password123!');
}

function signTokens(user) {
  const access = jwt.sign({ id:user.id, email:user.email, role:user.role }, JWT_SECRET, { expiresIn: '15m' });
  const refresh = jwt.sign({ id:user.id }, JWT_SECRET, { expiresIn: '30d' });
  return { token: access, refresh };
}

app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error:'email+password required' });
  if (users.find(u=>u.email===email)) return res.status(400).json({ error:'user exists' });
  const pwHash = await bcrypt.hash(password, 8);
  const id = users.length+1;
  const user = { id, email, password: pwHash, role:'user' };
  users.push(user);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null,2));
  res.json(signTokens(user));
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u=>u.email===email);
  if (!user) return res.status(401).json({ error:'invalid' });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error:'invalid' });
  res.json(signTokens(user));
});

app.post('/api/auth/refresh', (req,res)=>{
  const { refresh } = req.body;
  try {
    const payload = jwt.verify(refresh, JWT_SECRET);
    const user = users.find(u=>u.id===payload.id);
    if (!user) return res.status(401).end();
    return res.json(signTokens(user));
  } catch(e){
    return res.status(401).json({ error:'invalid' });
  }
});

// Simple share
const SHARES_FILE = path.join(DATA_DIR, 'shares.json');
let shares = [];
if (fs.existsSync(SHARES_FILE)) {
  try { shares = JSON.parse(fs.readFileSync(SHARES_FILE)); } catch(e){ shares=[]; }
}
app.post('/api/share', (req,res)=>{
  const payload = req.body;
  const id = (shares.length+1).toString();
  const rec = { id, payload, createdAt: new Date().toISOString() };
  shares.push(rec);
  fs.writeFileSync(SHARES_FILE, JSON.stringify(shares, null,2));
  res.json({ id });
});
app.get('/api/share/:id',(req,res)=>{
  const rec = shares.find(s=>s.id===req.params.id);
  if (!rec) return res.status(404).json({ error:'not found' });
  res.json(rec);
});
app.delete('/api/share/:id',(req,res)=>{
  const isAdmin = req.headers['x-admin']==='true';
  if (!isAdmin) return res.status(403).json({ error:'admin only' });
  shares = shares.filter(s=>s.id!==req.params.id);
  fs.writeFileSync(SHARES_FILE, JSON.stringify(shares, null,2));
  res.json({ ok:true });
});

// Health endpoints
app.get('/health', (req, res) => res.json({ ok: true, uptime: process.uptime(), timestamp: new Date().toISOString() }));
app.get('/api/health', (req, res) => res.json({ ok: true, service: 'backend', uptime: process.uptime(), timestamp: new Date().toISOString() }));

// Socket.IO with JWT
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' }});
io.use((socket, next)=>{
  const token = socket.handshake.auth && socket.handshake.auth.token;
  if (!token) return next(new Error('unauth'));
  try {
    socket.user = jwt.verify(token, JWT_SECRET);
    return next();
  } catch(e){
    return next(new Error('unauth'));
  }
});
io.on('connection', socket=>{
  socket.on('join-brief', (briefId)=> socket.join(`brief_room_${briefId}`));
  socket.on('brief:update', ({briefId, data})=> socket.to(`brief_room_${briefId}`).emit('brief:update', data));
});

server.listen(PORT, ()=> console.log('Backend listening on', PORT));

module.exports = { app, server };

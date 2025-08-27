/**
 * Simple migration runner using knex config fallback to sqlite for dev.
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

console.log('Running lightweight migrations (file-based for dev)...');

const usersFile = path.join(DATA_DIR, 'users.json');
if (!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, '[]');

const sharesFile = path.join(DATA_DIR, 'shares.json');
if (!fs.existsSync(sharesFile)) fs.writeFileSync(sharesFile, '[]');

console.log('Migrations completed (dev file-store).');

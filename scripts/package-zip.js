const fs = require('fs');
const archiver = require('archiver');
const output = fs.createWriteStream('marketing-spellbook-v6-complete.zip');
const archive = archiver('zip', { zlib: { level: 9 }});
output.on('close', ()=> console.log('zip created', archive.pointer()));
archive.pipe(output);
// exclude node_modules
archive.glob('**/*', {ignore:['**/node_modules/**','**/marketing-spellbook-v6-complete.zip']});
archive.finalize();

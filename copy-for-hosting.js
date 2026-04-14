const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, 'DC_VolleyDB_fixed.html');
const dest = path.join(__dirname, 'public', 'index.html');
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log('Hosting: copied DC_VolleyDB_fixed.html -> public/index.html');

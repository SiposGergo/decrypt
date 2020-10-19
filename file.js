const fs = require('fs');
const file = fs.readFileSync('./encrypted.txt', { encoding: 'utf-8'}).toString();

console.log(file);
const fs = require('fs');
const file = fs.readFileSync('./encrypted.txt', {encoding: 'utf8'}).toString();

console.log(file);
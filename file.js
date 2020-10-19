const fs = require('fs');
const file = fs
    .readFileSync('./encrypted.txt')
    .toString();
console.log(file);
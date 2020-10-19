const fileStream = require('fs');


const file = fileStream
    .readFileSync('./encrypted.txt', { encoding: 'utf-8' })
    .toString();
console.log(file);
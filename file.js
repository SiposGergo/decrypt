const fs = require('fs');
const file = fs
  .readFileSync('./encrypted.txt', { encoding: 'utf8' })
  .toString();

const count = {};

// count referencia szeritn adódik át !!!
const countChars = (encrypted, count) => {
  for (let i = 0; i < encrypted.length; i++) {
    const charAtI = encrypted[i];
    if (count[charAtI] === undefined) {
      count[charAtI] = 1;
    } else {
      count[charAtI]++;
    }
  }
};

countChars(file, count);
console.log('count', count);

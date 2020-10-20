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
// console.log('count', count);

const keys = Object.keys(count);
// console.log('keys', keys);

const arr = [];
for (let i = 0; i < keys.length; i++) {
  arr.push({ char: keys[i], count: count[keys[i]] });
}
// arr.sort((x, y) => y.count - x.count);

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j].count < arr[j + 1].count) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
bubbleSort(arr);
console.log(arr);

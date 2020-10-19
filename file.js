const fs = require('fs');
const { stringify } = require('querystring');
const file = fs.readFileSync('./encrypted.txt', { encoding: 'utf-8'}).toString();

const count = {};

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

const keys = Object.keys(count);
console.log('keys', keys);

const arr = [];
for (let i = 0; i < keys.length; i++) {
    arr.push({char: keys[i], count: count[keys[i]]});
};

console.log('arr', arr);

arr.sort((x, y) => y.count - x.count);
console.log('arr', arr);
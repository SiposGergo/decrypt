const fs = require('fs');
const file = fs
    .readFileSync('./encrypted.txt')
    .toString();
// console.log(file);

const count = {};
// count referencia szerint adódik át
const countChars = (file, count) => {
    for (let i = 0; i < file.length; i++) {
        const charArt = file[i];
        if(count[charArt] === undefined) {
            count[charArt] = 1;
        } else {
            count[charArt]++;
        }
    }
};

countChars(file, count);
console.log('count', count);
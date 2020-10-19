const fs = require('fs');       // file system importalju
const file = fs                 // meghivjuk az fs modul readFileSync metodusat
    .readFileSync('/home/tibor/gitclone/git2/decrypt/encrypted.txt', { encoding: 'utf8' }).toString();

// objectbe kulcsertekparkent az eredmenyt: A : 4

// // ELSO MEGOLDAS:
// const abc = 'abcdefghijklmnopqrstuvwxyz';
// const counter = 0;

// const decrypt = (abc) => {
//     for (let i = 1; i <= abc.length; i++){
//         for (let j = 0; i < file.length; j++) {
//             if ('a' === file[j]) {
//                 counter++;
//             };                
//         };
//     };
//     return counter;
// };

// console.log(decrypt(abc));


// MASODIK MEGOLDAS:
let count = {};

const countChar = (encrypted, count) => {
    for (let i = 0; i < encrypted.length; i++) {
        const charAt = encrypted[i];
        if (count[charAt] === undefined) {
            count[charAt] = i; 
        } else {
            count[charAt]++;
        };
    };
    return count;
};

countChar(file, count);
console.log('Count:', count);
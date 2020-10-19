const fs = require('fs');
const file = fs.readFileSync('./encrypted.txt', {encoding: 'utf8'}).toString();

//console.log(file);

const count = {};   //ezt azért csináltuk, hogy megnézzük, hogy kint is változik az objektum, mert referencia szerint adjuk át az objektumot
//jobb, ha a függvényen belül hozzuk létre, és visszatérünk vele
const countChars = (encrypted, count) => {
    for (let i = 0; i < encrypted.length; i++) {
        const charAtI  = encrypted[i];
        if (count[charAtI] === undefined) {
            count[charAtI] = 1; 
        } else {
            count[charAtI]++;
        }
    }
};

countChars(file, count);
console.log('count', count);
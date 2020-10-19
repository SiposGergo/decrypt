const fs = require('fs')
const file = fs
.readFileSync('./encrypted.txt',{encoding: 'utf8'}) //metódus, fájl elérési útvonala
.toString();

console.log(file);

/*üres object függvényen kívül


for string
charAtIndexI= str i
if obj[str(i)] === undefinied
obj[charAtIndexI]++

*/


const count = {};

const countChars = (encrypted, count) => { //count referencia szerinti érték átadás
    for (i=0; i<= encrypted.length; i++) {
        const charAtI = encrypted[i];
        if(count[charAtI] === undefined) {
            count[charAtI] = 1;
        } else {
            count[charAtI]++;
        }
    }
}

countChars(file, count);
console.log('count', count)
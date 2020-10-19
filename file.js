const fileStream = require('fs');


const file = fileStream
    .readFileSync('./encrypted.txt', { encoding: 'utf-8' })
    .toString();
console.log(file);
// újsor karakter ascci 10;

const alphabets = {};
//referencia szerinti értékátadás
const count = (file, alphabets) => {
    for (let i = 0; i < file.length; i++) {
        if (alphabets[file[i]] === undefined) {
            alphabets[file[i]] = 1;
        } else {
            alphabets[file[i]]++;
        }
    }
}

count(file, alphabets);
const keys = Object.keys(alphabets);

const arr=[];
for(let i=0;i<keys.length;i++){
    arr.push({char:keys[i], count: alphabets[keys[i]]});
}

arr.sort((x,y)=>y.count-x.count);
console.log(arr);
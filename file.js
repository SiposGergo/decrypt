const fs = require('fs');
const file=fs.readFileSync('./encrypted.txt', { encoding: 'utf8'}).toString();

console.log(file);

//sortörés ascii=10

const count = {};
const countCh = (enc, count) => {
    for (let i=0; i<enc.length; i++) {
        const chAtI =enc[i];
        if (count[chAtI]===undefined) {
            count[chAtI] =1;
        } else {
            count[chAtI]++;
        }
    }
};

countCh(file, count);
console.log('count', count);
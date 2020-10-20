const fs = require('fs');
const file=fs.readFileSync('./encrypted.txt', { encoding: 'utf8'}).toString();

console.log(file);

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

const keys = Object.keys(count);
console.log('keys', keys);
const tomb = [];
for (let i=0; i<keys.length; i++) {
    tomb.push({char:keys[i], count: count[keys[i]]});
}
//tomb.sort((x,y) => y.count - x.count);
const bubbleSort = (arr) => {
    for ( let i= arr.length-1; i>0; i--) {
        for (let j=0; j<i; j++) {
            if (arr[j].count<arr[j+1].count) {
                const tmp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
};
bubbleSort(tomb);
console.log('tomb', tomb);


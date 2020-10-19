const fs = require('fs');
const file = fs.readFileSync('./encrypted.txt', {encoding: 'utf-8'}).toString();

const counter = {}

const CountChar = (secrettext, count) => {
for (let i = 0; i < secrettext.length; i++) {
    let CharAtIndex = secrettext[i]
    if (count[CharAtIndex] === undefined) {
        count[CharAtIndex] = 1;
    }
    else {
        count[CharAtIndex]++;
    }
}
}

CountChar(file, counter);
console.log('count', counter);
const fs = require('fs');
const file = fs.readFileSync('./encrypted.txt', {encoding: 'utf-8'}).toString();

const key = {
    p: ' ',
    k: 'e',
    g: 'a',
    x: 'n',
    n: 'd',
    m: 't',
    d: 'h',
    h: 'o',
    q: 'w',
    f: 'j',
    z: 'u',
    o: 's',
    l: 'c',
    s: 'i',
    c: 'p',
    j: 'r',
    r: 'l',
    w: 'b',
    b: 'g',
    t: 'v',
    i: 'q',
    a: 'f',
    ' ': 'm',
    u: 'y',
    e: 'k',
    v: 'x',
    y: 'z'
}

const decrypt = (file, key) => {
    let str = ''
    for (let i = 0; i < file.length; i++) {
        if (key[file[i]] === undefined) {
            str += file[i];
        }
        else {
            str += key[file[i]];
        }
    }
return str;
}

console.log(decrypt(file, key));
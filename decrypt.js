const fs = require('fs');
const file = fs
    .readFileSync('./encrypted.txt')
    .toString();

const key = {
    p: ' ',
    k: 'e',
    g: 'a',
    x: 'n',
    n: 'd',
    o: 's',
    m: 't',
    d: 'h',
    h: 'o',
    q: 'w',
    f: 'j',
    z: 'u',
    r: 'l',
    w: 'b',
    b: 'g',
    j: 'r',
    l: 'c',
    s: 'i',
    c: 'p',
    a: 'f',
    ' ': 'm',
    i: 'q',
    u: 'y',
    v: 'x',
    t: 'v',
    y: 's',
    e: 'k',
};

const decrypt = (file, key) => {
    let str = '';
    for (let i = 0; i < file.length; i++) {
        if(key[file[i]] === undefined) {
            str += file[i];
        } else {
            str += key[file[i]];
        }
    }
    return str;
};

console.log(decrypt(file,key));
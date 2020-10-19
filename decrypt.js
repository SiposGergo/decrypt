const fs = require('fs');
const { stringify } = require('querystring');
const file = fs.readFileSync('./encrypted.txt', { encoding: 'utf-8'}).toString();

const key = {
    p: ' ',
    k: 'e',
    m: 't',
    g: 'a',
    x: 'n',
    d: 'h',
    u: 'n',
    b: 'g',
    n: 'd',
    o: 's',
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
    a: 'f',
    c: 'p',
    ' ': 'm',
    i: 'q',
    u: 'y',
    y: 's',
    e: 'k',
    t: 'v',
    v: 'x'

};

const decrypt = (file, key) => {
    let str = '';
    for (let i = 0; i < file.length; i++) {
        if (key[file[i]] === undefined) {
            str += file[i];
        } else {
            str += key[file[i]];
        }
    }
    return str;
};

console.log(decrypt(file, key));
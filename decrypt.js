const fs = require('fs');
const file = fs
.readFileSync('./encrypted.txt', {encoding: 'utf8'})
.toString();

const key = {
    p: ' ',
    k: 'e',
    m: 't',
    h: 'o',
    x: 'n',
    d: 'h',
    u: 'm',
    g: 'a',
    o: 's',
    q: 'w',
    f: 'j',
    z: 'u',
    r: 'l',
    n: 'd',
    b: 'g',
    j: 'r',
    c: 'p',
    s: 'i',
    i: 'q',
    ' ': 'm',
    u: 'y',
    v: 'x',
    t: 'v',
    y: 's',
    w: 'b',
    l: 'c',
    e: 'k',
    a: 'f',

}

const decrypt = (file, key) => {
    let str = "";
    for(let i = 0; i < file.length; i++) {
        if(key[file[i]] === undefined) {
            str += file[i];
        }else {
            str += key[file[i]];
        }
    }
    return str;
}

console.log(decrypt(file, key));
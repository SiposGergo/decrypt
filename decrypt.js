const fs = require('fs')
const file = fs
.readFileSync('./encrypted.txt',{encoding: 'utf8'}) //metódus, fájl elérési útvonala
.toString();

// p k m h az most az object kulcsa)
const key = {
    p: ' ',
    k: 'e',
    g: 'a',
    x: 'n',
    n: 'd',
    o: 's',
    m: 't',
    d: 'h',
    n: 'e',
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
    ' ': 'm',
    i: 'q',
    u: 'y',
    v: 'x',
    t: 'v',
    e: 'k',
}

const decrypt = (file, key) => {
    let str = '';
    for (let i = 0; i< file.length; i++){
    if (key[file[i]] === undefined) {
        str += file[i];
    } else {
        str += key[file[i]];
    }
}
    return str
}

console.log(decrypt(file, key));
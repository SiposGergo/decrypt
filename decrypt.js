const fs = require('fs');       // file system importalja
const file = fs                 // meghivjuk az fs modul readFileSync metodusat
    .readFileSync('/home/tibor/gitclone/git2/decrypt/encrypted.txt', { encoding: 'utf8' }).toString();

const key = {
    p : ' ',
    k : 'e',
    m : 't',                // cjsxlscrko ... cjsolscreo
    h : 'o',
    x : 'n',
    d : 'h',
    o : 's',
    q : 'w',
    z : 'u',
    b : 'g',
    l : 'c',
    s : 'i',
    r : 'l',
    a : 'f',
    c : 'p',
    ' ' : 'm',
    j : 'r',
    w : 'b',
    n : 'd',
    g : 'a',
    t : 'v',
    u : 'y',
    f : 'j',
    v : 'x',
    y : 'z',
    e : 'k',
    i : 'q'
};

const decrypt = (file, key) => {
    let str = '';
    for (let i = 0; i < file.length; i++) {
        if (key[file[i]] === undefined) {
            str += file[i];
        } else { 
            str += key[file[i]].toUpperCase();
        };
    };
    return str;
};

console.log(decrypt(file, key));
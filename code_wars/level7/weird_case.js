'use strict'

function toWeirdCase(s){
    let weird = [];
    Array.from(s.split(' ')).forEach( (i) => {
            let temp = '';
        Array.from(i).map( (x,ind) => {
            (ind%2) ? temp += x.toLowerCase() : temp += x.toUpperCase();})
        weird.push(temp)})
    return weird.join(' ');
}
let test1 = 'apple';
let test2 = 'this is a test';

console.log(toWeirdCase(test1));

console.log(toWeirdCase(test2));

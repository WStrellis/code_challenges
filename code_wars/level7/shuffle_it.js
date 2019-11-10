'use strict';

// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(a , ...b){
    b.forEach(([x,z]) =>  [ a[x], a[z] ] = [ a[z], a[x] ] );
    return a;
}

let ex1 = shuffleIt([1,2,3,4,5],[1,2]) 
console.log(`value of ex1: ${ex1}
should be: [1,3,2,4,5]`); 

let ex2 = shuffleIt([1,2,3,4,5],[1,2],[3,4])  ;
console.log(`value of ex1: ${ex2}
should be: [1,3,2,5,4]`); 

let ex3 = shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) ; 
console.log(`value of ex1: ${ex3}
should be: [1,3,5,2,4]`); 

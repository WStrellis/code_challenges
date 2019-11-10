'use strict'
//my solution
function colorOf(r,g,b){
    r = (r < 16) ? `0${r.toString(16)}` : `${r.toString(16)}` ;
    g = (g < 16) ? `0${g.toString(16)}` : `${g.toString(16)}` ;
    b = (b < 16) ? `0${b.toString(16)}` : `${b.toString(16)}` ;
    return '#'+r+g+b; 
}

// other person's solution
// const colorOf = (...rgb) => '#' + rgb.map(x => `0${x.toString(16)}`.slice(-2)).join('')


let test1 = colorOf(255,0,0); 
console.log(test1 + ' should be #ff0000');
let test2 = colorOf(0,111,0)  
console.log(test2 + ' should be #006f00');
let test3 = colorOf(1, 2 ,3) ;
console.log(test3 + ' should be #010203');

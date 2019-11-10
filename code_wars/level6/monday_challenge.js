/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

["a",0,"b",0,0,0,0null,0,0,0,"c","d",1,0,false,1,0,3,[],1,9,{},9] ->
["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]

[1,2,0,1,1,2] -> 
[1,2,1,1,2,0] 
*/

function moveZeroes( arr ){
  //declare empty array
  const zeroes = [];
  const notZeroes = [];
  
  // loop over array
  arr.forEach( i => {
    (i === 0 )? zeroes.push(i): notZeroes.push(i);
  })

  //concat arrays and return
  return [...notZeroes, ...zeroes];
}

module.exports =  moveZeroes ;

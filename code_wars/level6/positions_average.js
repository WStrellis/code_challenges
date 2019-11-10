'use strict';
// https://www.codewars.com/kata/positions-average/javascript
function posAverage(s) {
  let matches = 0;
  let arr = s.split(', ');
  for(let i = 0; i < arr.length-1; i++){
    let str1 = arr[i];
    let str2 = arr[i+ 1];
    str1.split('').forEach((current,index)=>{
      if(current === str2[index]) matches++;
    })
  }
  return ((matches / (arr.length * arr[0].length))* 100).toPrecision(12);
}

// console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"));
module.exports.posAverage = posAverage;

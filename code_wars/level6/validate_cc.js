'use strict';
// https://www.codewars.com/kata/validate-credit-card-number/train/javascript

function validate(n){
  let  num = n.toString().split('').reverse();
  if( num.length > 1){
    let numCopy = [...num];
    // double every other digit from right to left starting from the 2nd to last digit
    for(let i = 1; i < num.length; i += 2){
      let doubled = num[i] * 2
      // if the resulting number is greater than 9 subtract 9 from it
      if (doubled > 9)  doubled -= 9;
      numCopy[i] = doubled;
    }
  // sum all of the digits
    let numsSum = numCopy.reduce((acc, curr)=> acc += parseInt(curr), 0);
    // divide the sum by 10. If the remainder is 0 return true, else false
    return (numsSum % 10 === 0)? true : false ;
  }else {
    return false;
  }
}

// console.log(validate(123));

module.exports.validate = validate;

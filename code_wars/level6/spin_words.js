'use strict';

// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(words){
  /* argument is a string of words, only letters and spaces. This function
  will reverse the letters of words that are five or more characters long. 
  1. call replace on input, using regEx to find 5+ character words
  2. Use a function to reverse the letters
  3. return the result of .replace
   */
  return words.replace( /[a-z]{5,}/gi, (word)=>{
    let reversed = '';
    for(let i = word.length - 1; i>-1; i--){
      reversed += word[i]
    }
    return reversed
  }
  )
} // end spinWords

module.exports = {spinWords};

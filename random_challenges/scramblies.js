'use strict';
// https://www.codewars.com/kata/scramblies/train/javascript

function scramble(str1, str2) {
  let s1arr = str1.split('');
  return (str2.split('').filter(i => s1arr.includes(i)).length === str2.length);
}

module.exports.scramble = scramble;

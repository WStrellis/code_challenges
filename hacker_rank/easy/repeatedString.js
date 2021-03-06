/*
https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

return an integer representing the number of occurrences of a in the prefix of length  n in the infinitely repeating string.
*/
/* v1

function repeatedString(s, n) {
  // create a string that is at least as long as n
  let bigString = '';
  while (bigString.length < n) {
    bigString += s;
  }
  // count the number of 'a's up to n
  return bigString.slice(0, n).match(/a/g).length;
}
*/

function repeatedString(s, n) {
  const regex = new RegExp('a', 'g');
  //check if any a's exist
  let count = s.match(regex);
  // if the string has a's calculate result, else return 0
  if (count) {
    // divide n by length of s and multiply number of a's in s by result
    count = count.length * Math.floor(n / s.length);
    // count number of a's in remainder and add to count
    let remainder = n % s.length;
    if (remainder) {
      let matchesInRemainder = s.slice(0, remainder).match(regex);
      matchesInRemainder && (count += matchesInRemainder.length);
    }
    return count;
  } else {
    return 0;
  }
}
module.exports = repeatedString;

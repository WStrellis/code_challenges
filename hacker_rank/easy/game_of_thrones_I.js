// https://www.hackerrank.com/challenges/game-of-thrones/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen

/*
Complete the gameOfThrones function below to determine whether a given string can be rearranged into a palindrome. If it is possible, return YES, otherwise return NO.

gameOfThrones has the following parameter(s):

s: a string to analyze
Input Format

A single line which contains s, the input string.

s only contains [a-z]

Output:
'YES' || 'NO'
*/

function gameOfThrones(s) {
  // create array with same length as  alphabet. Initalize all values to 0
  const charCount = {}
  // traverse string and count occurences of all characters
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] ? charCount[s[i]]++ : (charCount[s[i]] = 1)
  }
  // if there is more than one odd value return NO, else return YES
  let oddCount = 0
  let isPalindrome = true
  let charCountArr = Object.entries(charCount)
  for (let i = 0; i < charCountArr.length; i++) {
    if (i[1] % 2 !== 0) {
      oddCount++
    }
    if (oddCount > 1) {
      isPalindrome = false
      break
    }
  }
  return isPalindrome ? 'YES' : 'NO'
}

module.exports = gameOfThrones

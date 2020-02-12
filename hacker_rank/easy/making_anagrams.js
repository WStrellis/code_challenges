//https://www.hackerrank.com/challenges/making-anagrams/problem?h_r=next-challenge&h_v=zen

/*
input: two strings
output: the combind total number of characters that must be removed from both strings to make them the same

Requirements
- Repeat characters must be present in both strings

Considerations
- the input strings can be different length
- the input strings use only lower case characters [a-z]

Variables:
deletions - int - count number of characters removed
*/

const makingAnagrams = (s1, s2) => {
  let deletions = 0
  if (s1 === s2) return deletions
  //loop over longest str
  let longer = s1.length >= s2.length ? s1 : s2
  let shorter = longer === s1 ? s2.split('') : s1.split('')

  for (let i = 0; i < longer.length; i++) {
    let char = longer[i]
    // find the index  of the current character in the other str
    let found = shorter.indexOf(char)
    found > -1
      ? // if found, change that character to undefined
        (shorter[found] = undefined) // if not found deletions++
      : deletions++
  }
  // when loop ends count the number of characters that are not undefined in s2 and add to deletions
  shorter.forEach(i => {
    if (i) deletions++
  })

  //return deletions

  return deletions
}
module.exports = makingAnagrams

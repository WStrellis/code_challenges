/* 
https://www.hackerrank.com/challenges/between-two-sets/problem

Input: two arrays of sorted integers
Find the integers that are factors of all integers in the first array.  
someNumber % firstArray[x] === 0

Find the integers for which all number in the second array are a factor of. 
secondArray[x] % someNumber === 0

return a count of many integers were found.
*/

function getTotalX(a, b) {
  let between = 0
  let aOK
  let bOK
  for (let i = 0; i <= b[b.length - 1]; i++) {
    aOK = true
    bOK = true
    arr1: for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        aOK = false
        break arr1
      }
    }

    if (!aOK) {
      continue
    }

    arr2: for (let k = 0; k < b.length; k++) {
      if (b[k] % i !== 0) {
        bOK = false
        break arr2
      }
    }

    if (aOK && bOK) {
      between++
    }
  }

  return between
}

module.exports = getTotalX

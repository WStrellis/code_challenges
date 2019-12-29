'use strict'

function two_sum(numbers, target) {
  // declare variable to store indexes of numbers whose sum = target
  let solution = []
  let ind1 = 0
  let ind2 = 0
  // loop over each item in array
  outer: for (let current1 of numbers) {
    // loop over items again
    for (let current2 of numbers) {
      // add number and check that it is not adding number from the same index
      if (current1 + current2 === target && ind1 !== ind2) {
        // store solution in variable
        ;[...solution] = [ind1, ind2]
        // end loops if a solution is found
        break outer
      }
      ind2++
    }
    ind1++
    // reset index2
    ind2 = 0
  }
  return solution
} // end two_sum

module.exports = two_sum

/*
https://www.hackerrank.com/challenges/mini-max-sum/problem

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/
function miniMaxSum(arr) {
  let z = [...arr]
  // sort arr
  z.sort((a, b) => a - b)
  // add first four to get min
  const min = z.slice(0, 4).reduce((sum, i) => (sum += i), 0)
  // add last four to get max
  const max = z.slice(1).reduce((sum, i) => (sum += i), 0)
  //return result
  return `${min} ${max}`
}

module.exports = miniMaxSum

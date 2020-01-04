'use strict'

function diagonalDifference(arr) {
  let first = 0
  let second = 0
  let reverseInd = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    first += arr[i][i]
    second += arr[i][reverseInd]
    reverseInd -= 1
  }
  return Math.abs(first - second)
}

module.exports = diagonalDifference

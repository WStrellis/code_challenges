'use strict';

function diagonalDifference(arr) {
    // Write your code here
    let first = 0;
    let second = 0;
    let reverseInd = 2;
    for (let i = 0; i < 3; i++){
        first += arr[i][i];
        second += arr[i][reverseInd];
        reverseInd -= 1;
    }
    return Math.abs(first - second);
}

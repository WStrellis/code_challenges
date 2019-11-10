'use strict';



function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((acc, curr) => {
    return acc + curr},0) / classPoints.length ;
}

betterThanAverage([2,3],5)
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)



module.exports.betterThanAverage = betterThanAverage;

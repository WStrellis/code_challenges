// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
/* 
Given x dollars and an array of n prices determine the maximum number of items that can be purchased from the list
*/

function maximumToys(prices, k) {
  let maxToys = 0;
  // filter out any toys exceeding the price
  // sort prices
  if (prices.length) {
    prices = prices.sort((a, b) => a - b);
    // sum prices of toys while totalPrice < k
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
      totalPrice += prices[i];
      if (totalPrice <= k) {
        maxToys++;
      } else {
        break;
      }
    }
  }

  return maxToys;
}

module.exports = maximumToys;

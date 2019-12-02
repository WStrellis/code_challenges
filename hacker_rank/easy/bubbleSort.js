//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a) {
  function swap(a, j) {
    let z = a[j + 1];
    a[j + 1] = a[j];
    a[j] = z;
  }

  let numSwaps = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i; j++) {
      if (a[j] > a[j + 1]) {
        swap(a, j);
        numSwaps++;
      }
    }
  }
  console.log(
    `Array is sorted in ${numSwaps} swaps.
    \rFirst Element: ${a[0]}
    \rLast Element: ${a[a.length - 1]}`
  );
}

countSwaps([43, 499, 84, 533, 246]);
module.exports = countSwaps;

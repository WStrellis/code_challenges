// https://www.codewars.com/kata/josephus-survivor/train/javascript
function josephusSurvivor(n, k) {
  // make array of n people
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  // person to remove
  let out = k
  // remove people from the array until only one remains
  while (arr.length > 1) {
    arr.splice(arr.indexOf(out - 1), 1)

    if (out + k <= arr.length) out += k
    else out = arr.length - k + (k - 1)
  }
  function calcNext(a, k, out) {
    let position = out
    while (steps < o) {}
  }
  return arr[0]
}

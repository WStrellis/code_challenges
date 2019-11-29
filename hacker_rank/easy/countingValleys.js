// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(n, s) {
  //track current elevation
  let elevation = 0;
  //track number of valleys visited
  let valleys = 0;
  // loop over steps
  for (let i = 0; i < s.length; i++) {
    let prevElevation = elevation;
    s[i].match(/U/) ? elevation++ : elevation--;
    // if person is not in a valley and the next step takes elevation below 0 add +1 to valleys.
    if (elevation < prevElevation && prevElevation === 0) {
      valleys++;
    }
  }

  //return valleys visited
  return valleys;
}

module.exports = countingValleys;

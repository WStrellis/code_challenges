function jumpingOnClouds(c) {
  let position = 0;
  let jumps = 0;
  const stopAt = c.length;
  while (position < stopAt) {
    let longJump = c[position + 2];
    let shortJump = c[position + 1];
    if (longJump === 0) {
      position += 2;
      jumps++;
    } else if (shortJump === 0) {
      position++;
      jumps++;
    } else {
      break;
    }
  }

  return jumps;
}

module.exports = jumpingOnClouds;

function jumpingOnClouds(c) {
  let position = 0;
  let jumps = 0;
  while (position <= c.length - 1) {
    let longJump = c[position + 2];
    console.log("long jump", longJump);
    let shortJump = c[position + 1];
    console.log("short jump", shortJump);
    if (longJump === 0) {
      position += 2;
      jumps++;
      console.log("jumps", jumps);
    } else if (shortJump === 0) {
      position++;
      jumps++;
      console.log("jumps", jumps);
    }
    console.log("position", position);
    return;
  }

  return jumps;
}

module.exports = jumpingOnClouds;

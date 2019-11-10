function breakingRecords(scores) {
  let scoresArr = scores.slice(0).split(' ')
  let high = +scoresArr[0]
  let low = +scoresArr[0]
  let brokeRecord = [0, 0]
  for (let i = 0; i < scoresArr.length; i++) {
    if (scoresArr[i] < low) {
      low = +scoresArr[i]
      brokeRecord[1] += 1
    } else if (scoresArr[i] > high) {
      high = +scoresArr[i]
      brokeRecord[0] += 1
    }
  }

  return `${brokeRecord[0]} ${brokeRecord[1]}`
}

module.exports = { breakingRecords }

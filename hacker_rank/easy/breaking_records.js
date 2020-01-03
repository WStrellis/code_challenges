function breakingRecords(scores) {
  let high = scores[0]
  let low = scores[0]
  let brokeRecord = [0, 0]
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < low) {
      low = scores[i]
      brokeRecord[1] += 1
    } else if (scores[i] > high) {
      high = scores[i]
      brokeRecord[0] += 1
    }
  }

  return `${brokeRecord[0]} ${brokeRecord[1]}`
}
module.exports = { breakingRecords }

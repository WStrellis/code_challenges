function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2) {
    return 'YES'
  } else if (v1 < v2 || v1 === v2) {
    return 'NO'
  }

  let met = 'NO'
  while (x1 <= x2) {
    x1 = x1 + v1
    x2 = x2 + v2
    if (x1 === x2) {
      met = 'YES'
      break
    }
  }
  return met
}

module.exports = kangaroo

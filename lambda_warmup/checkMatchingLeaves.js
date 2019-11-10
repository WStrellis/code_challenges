function checkMatchingLeaves(obj) {
  return Object.values(obj).every((val, ind, arr) => {
    if (typeof val === 'object' && val.length === 'undefined') {
      checkMatchingLeaves(val)
    } else {
      return JSON.stringify(val) === JSON.stringify(arr[0])
    }
  })
}

module.exports = checkMatchingLeaves

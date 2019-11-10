function moneyFormat(num) {
  // remove extra nums after decimal
  let money = num.toFixed(2)
  // split part before decimal
  let [dollars, cents] = money.split('.')
  // reverse dollars and add commas
  dollars = [...dollars].reverse().map((dollar, ind) => {
    return (ind + 1) % 3 === 0 && ind + 1 !== dollars.length
      ? ',' + dollar
      : dollar
  })
  return '$' + dollars.reverse().join('') + '.' + cents
}

module.exports = { moneyFormat }

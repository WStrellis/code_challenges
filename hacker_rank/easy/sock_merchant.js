function sockMerchant(n, ar) {
  const socks = new Set(ar);

  let pairs = 0;

  socks.forEach((sockType, sT) => {
    const matches = Math.floor(ar.filter(sock => sock === sockType).length / 2);
    pairs += matches;
  });
  return pairs;
}

module.exports = sockMerchant;

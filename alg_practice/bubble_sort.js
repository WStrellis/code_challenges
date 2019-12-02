function bubbleSort(a, dir = 'a') {
  const swap = (arr, i) => {
    let swapper = arr[i];
    a[i] = a[i + 1];
    a[i + 1] = swapper;
  };

  const asc = (a, i) => {
    if (a[i] > a[i + 1]) {
      swap(a, i);
    }
  };

  const desc = (a, i) => {
    if (a[i] < a[i + 1]) {
      swap(a, i);
    }
  };

  let operation = dir === 'd' ? desc : asc;

  for (let i = 0; i < a.length; i++) {
    let last = a.length;

    for (let j = 0; j < last; j++) {
      operation(a, j);
    }
    last--;
  }
  return a;
}

module.exports = bubbleSort;

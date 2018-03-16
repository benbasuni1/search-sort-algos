let merge = (A, temp, from, mid, to) => {
  let k = from;
  let i = from;
  let j = mid + 1;

  while (i <= mid && j <= to) {
    temp[k++] = (A[i] < A[j]) ? A[i++] : A[j++];
  }

  while (i <= mid) {
    temp[k++] = A[i++];
  }

  for (i = from; i <= to; i++) {
    A[i] = temp[i];
  }
}

module.exports = arr => {
  let startMerge = new Date();
  let low = 0;
  let high = arr.length - 1;

  let temp = arr.slice();

  for (let m = 1; m < high - low; m = 2 * m) {
    for (let i = low; i < high; i += 2 * m) {
      let from = i;
      let mid = i + m - 1;
      let to = Math.min(i + 2 * m - 1, high);
      merge(arr, temp, from, mid, to);
    }
  }

  console.log('* Merge Sort: ', new Date() - startMerge, 'ms', '\n');
  return arr;
}



let binarySearch = (arr, left, right, target) => {
  if (right >= left) {
    let mid = left + (right - left) / 2;

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) return binarySearch(arr, left, mid - 1, target);

    return binarySearch(arr, mid + 1, right, target);
  }
}

module.exports = (arr, target) => {
  let startExponential = new Date();
  if (arr[0] === target) return 0;
  let i = 1;
  while (i < arr.length && arr[i] <= target) i = i * 2;

  console.log('* Exponential Search: ', new Date() - startExponential, 'ms', '\n');
  return binarySearch(arr, i / 2, Math.min(i, arr.length), target)
}


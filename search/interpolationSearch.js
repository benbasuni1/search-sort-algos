module.exports = (arr, target) => {
  let startInterpolation = new Date();
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos = low + (( (high - low) / (arr[high] - arr[low] )) * (target - arr[low]));

    if (arr[pos] === target) {
      console.log('* Interpolation Search: ', new Date() - startInterpolation, 'ms', '\n');
      return pos;
    }

    (arr[pos] < x) ? low = pos + 1 : high = pos - 1;

    return -1;
  }
}

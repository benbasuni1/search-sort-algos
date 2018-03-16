module.exports = (arr, target) => {
  let startJump = new Date();

  let step = Math.floor(Math.sqrt(arr.length));
  let prev = 0;

  while (arr[Math.min(step, arr.length) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(arr.length));
    if (prev >= arr.length) return -1;
  }

  while (arr[prev] < target) {
    prev++;
    if (prev == Math.min(step, arr.length)) return -1;
  }

  if (arr[prev] === target) {
    console.log('* Jump Search: ', new Date() - startJump, 'ms', '\n');
    return prev;
  }

  return -1;
}

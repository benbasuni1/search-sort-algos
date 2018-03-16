module.exports = arr => {
  let startShell = new Date();
  let h = 1;
  while (h < arr.length / 3)
      h = 3 * h + 1;

  while (h > 0) {
      for (let i = h; i < arr.length; i += h) {
          for (let n = i; n > 0 && arr[n] < arr[n-h]; n -= h) {
              let number = arr[n];
              arr[n]     = arr[n-h];
              arr[n-h]   = number;
          }
      }
      h = --h / 3;
  }

  console.log('* Shell Sort: ', new Date() - startShell, 'ms', '\n');
  return arr;
}

module.exports = (arr, target) => {
  let startFibonacci = new Date();

  let fib2   = 0;
  let fib1   = 1;
  let fibNum = fib2 + fib1;

  while (fibNum < arr.length) {
    fib2   = fib1;
    fib1   = fibNum;
    fibNum = fib2 + fib1;
  }

  let offset = -1;

  while (fibNum > 1) {
    let i = Math.min(offset + fib2, arr.length - 1);

    if (arr[i] < target) {
      fibNum = fib1;
      fib1   = fib2;
      fib2   = fibNum - fib1;
      offset = i;
    } else if (arr[i] > target) {
      fibNum = fib2;
      fib1   = fib1 - fib2;
      fib2   = fibNum - fib1;
    } else {
      console.log('* Fibonacci Search: ', new Date() - startFibonacci, 'ms', '\n');
      return i;
    }

    if (fib1 === 1 && arr[offset + 1] === target) {
      console.log('* Fibonacci Search: ', new Date() - startFibonacci, 'ms', '\n');
      return offset + 1;
    }

    return -1;
  }
}


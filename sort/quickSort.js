let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i]   = arr[j];
  arr[j]   = temp;
}

let partition = (arr, begin, end) => {
  let x = arr[end];
  let y = begin - 1;

  for (let i = begin; i <= end - 1; i++) {
    if (arr[i] <= x) {
      i++;
      swap(arr, y, i)
    }
  }
  swap(arr, y + 1, end);
  return y + 1;
}

module.exports = arr => {
  let startQuick = new Date();
  let begin = 0;
  let end   = arr.length - 1;

  let stack = [];
  let top   = -1;

  stack[++top] = begin;
  stack[++top] = end;

  while (top >= 0) {
    end   = stack[top--];
    begin = stack[top--];

    let p = partition(arr, begin, end);

    if (p - 1 > begin) {
      stack[++top] = begin;
      stack[++top] = p - 1;
    }

    if(p + 1 < end) {
      stack[++top] = p + 1;
      stack[++top] = end;
    }
  }

  console.log('* Quick Sort: ', new Date() - startQuick, 'ms', '\n');
  return arr;
}



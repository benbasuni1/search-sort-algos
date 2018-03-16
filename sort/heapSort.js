let swap = (data, i, j) => {
    var tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
}

let putArrayInHeapOrder = arr => {
    let i = Math.floor(arr.length / 2 - 1);
    while (i >= 0) {
        heapFilterDown(arr, i, arr.length);
        i -= 1;
    }
}

let heapFilterDown = (heap, i, max) => {
    let i_big, c1, c2;
    while(i < max) {
        i_big = i;
        c1 = 2*i + 1;
        c2 = c1 + 1;
        if (c1 < max && heap[c1] > heap[i_big]) i_big = c1;
        if (c2 < max && heap[c2] > heap[i_big]) i_big = c2;
        if (i_big == i) return;
        swap(heap,i, i_big);
        i = i_big;
    }
}
 
module.exports = arr => {
  let startHeap = new Date();
  putArrayInHeapOrder(arr);
  let end = arr.length - 1;

  while(end > 0) {
      swap(arr, 0, end);
      heapFilterDown(arr, 0, end);
      end -= 1
  }

  console.log('* Heap Sort: ', new Date() - startHeap, 'ms', '\n');
  return arr;
}


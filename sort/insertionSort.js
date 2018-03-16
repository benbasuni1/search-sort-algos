module.exports = (arr, print = true) => {
  let startInsertion = new Date();
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  if (print) console.log('* Insertion Sort: ', new Date() - startInsertion, 'ms', '\n');
  return arr;
}


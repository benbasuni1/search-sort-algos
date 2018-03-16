/* Bubble Sort */
module.exports = array => {
  let startBubble = new Date();
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp     = array[i + 1];
        array[i + 1] = array[i];
        array[i]     = temp;
        swap         = true;
      }
    }
  } while (swap);

  console.log('* Bubble Sort: ', new Date() - startBubble, 'ms', '\n');
  return array;
};


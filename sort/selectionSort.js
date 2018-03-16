/*
 Loop through array
   set min to firstIndex
   Loop through array 2nd time
     if arr[secondIndex] < arr[firstIndex] set min to secondIndex
   if min is not equal to firstIndex, swap arr[firstIndex] with arr[min]
*/

module.exports = arr => {
  let startSelection = new Date();
  for (let firstIndex = 0; firstIndex < arr.length; firstIndex++) {
    let min = firstIndex;
    for (let secondIndex = firstIndex + 1; secondIndex < arr.length; secondIndex++)
      if (arr[secondIndex] < arr[firstIndex]) min = secondIndex;

    if (min !== firstIndex) {
      let temp = arr[min];
      arr[min] = arr[firstIndex];
      arr[firstIndex] = temp;
    }
  }

  console.log('* Selection Sort: ', new Date() - startSelection, 'ms', '\n');
  return arr;
}


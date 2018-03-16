const insertionSort = require('./insertionSort');

module.exports = arr => {
  let startBucket = new Date();
  let result = new Array(arr.length);
  let max = -Infinity, min = Infinity;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
      result[i] = [];
  }
  let divisor = (max - min);
  if (divisor == 0) divisor = 1;
  for (let i = 0; i < arr.length; i++) {
      var index = Math.floor(arr.length * ((arr[i] - min) / divisor));
      if (index == arr.length) index--;
      result[index].push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
      result[i] = insertionSort(result[i], false);
  }
  var response = [];
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
          response.push(result[i][j]);
      }
  }

  console.log('* Bucket Sort: ', new Date() - startBucket, 'ms', '\n');
  return response;
};


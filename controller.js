// Searches
const linearSearch        = require('./search/linearSearch');
const binarySearch        = require('./search/binarySearch');
const jumpSearch          = require('./search/jumpSearch');
const interpolationSearch = require('./search/interpolationSearch');
const exponentialSearch   = require('./search/exponentialSearch');
//const fibonacciSearch     = require('./search/fibonacciSearch');

// Sorts
const bubbleSort     = require('./sort/bubbleSort');
const quickSort      = require('./sort/quickSort');
const mergeSort      = require('./sort/mergeSort');
const selectionSort  = require('./sort/selectionSort');
const heapSort       = require('./sort/heapSort');
const insertionSort  = require('./sort/insertionSort');
const bucketSort     = require('./sort/bucketSort');
const shellSort      = require('./sort/shellSort');
const pigeonHoleSort = require('./sort/pigeonHoleSort');
const radixSort      = require('./sort/radixSort');
const cocktailSort   = require('./sort/cocktailSort');

let compareSearches = target => {
  let newDate = new Date();
  const sortedData = require('./setup/searchSetup');
  console.log(new Date() - newDate + ' ms to load\n');

  linearSearch(sortedData.slice(), target);
  binarySearch(sortedData.slice(), target);
  jumpSearch(sortedData.slice(), target);
  interpolationSearch(sortedData.slice(), target);
  exponentialSearch(sortedData.slice(), target);
  //fibonacciSearch(sortedData.slice(), target);
}

let compareSorts = () => {
  let newDate = new Date();
  const data = require('./setup/sortSetup');
  console.log(new Date() - newDate + ' ms to load\n');

  mergeSort(data.slice());
  bubbleSort(data.slice());
  selectionSort(data.slice());
  quickSort(data.slice());
  heapSort(data.slice());

  insertionSort(data.slice());
  bucketSort(data.slice());
  shellSort(data.slice());
  pigeonHoleSort(data.slice());
  radixSort(data.slice());
  cocktailSort(data.slice());
}


module.exports = {
  compareSearches,
  compareSorts
}

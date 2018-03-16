/* Binary Search */
/* 
  set beginning and end variables
  while beginning < end
    set mid = beginning + end / 2
    if arr[mid] is equal to target return mid
    if arr[mid] is less than target => beginning = mid+1;
    if arr[mid] is greater than target => end = mid-1;
  return -1
*/
module.exports= (arr, target) => {
  let startBinary = new Date();
  let left  = 0;
  let right = arr.length -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      console.log('* Binary Search: ', new Date() - startBinary, 'ms', '\n');
      return mid;
    }
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

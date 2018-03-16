/*
 BASE CASE
   if arr length is less than 1, return arr

 RECURSIVE CASE
   set left, right, and newArray to empty arrays
   set pivot to arr.pop()

   loop through array
    if current is less than pivot, push to left, else push to right

   return newArray.concat(sort(left), pivot, sort(right))
*/
let quickSort = arr => {
  if (arr.length <= 1) return arr;

  let left     = [];
  let right    = [];
  let newArray = [];
  let pivot    = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    (arr[i] <= pivot) ? left.push(arr[i]) : right.push(arr[i]);
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
}

//module.exports = quickSort;

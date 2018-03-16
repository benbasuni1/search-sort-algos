/* Merge Sort */
let mergeSort = arr => {

  if (arr.length < 2) return arr;

  let mid   = Math.floor(arr.length / 2);
  let left  = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(right), mergeSort(left));
}

let merge = (right, left) => {
  let l = r = 0;
  let result = [];

  while (l < left.length && r < right.length)
    (left[l] < right[r]) ? result.push(left[l++]) : result.push(right[r++]);

  return result.concat(left.slice(l)).concat(right.slice(r));
}

module.exports = { mergeSort }

module.exports = arr => {
  let startRadix = new Date();
  let idx1, idx2, idx3, len1, len2, radix, radixKey;
  let radices = {}, buckets = {}, num, curr;
  let currLen, radixStr, currBucket;

  len1 = arr.length;
  len2 = 10;  // radix sort uses ten buckets

  for (idx1 = 0;idx1 < len1;idx1++)
    radices[arr[idx1].toString().length] = 0;

  for (radix in radices) {
    len1 = arr.length;
    for (idx1 = 0;idx1 < len1;idx1++) {
      curr = arr[idx1];
      currLen = curr.toString().length;
      if (currLen >= radix) {
        radixKey = curr.toString()[currLen - radix];
        if (!buckets.hasOwnProperty(radixKey))
          buckets[radixKey] = [];

        buckets[radixKey].push(curr);
      } else {
        if (!buckets.hasOwnProperty('0'))
          buckets['0'] = [];

        buckets['0'].push(curr);
      }
    }
    idx1 = 0;
    for (idx2 = 0;idx2 < len2;idx2++) {
      if (buckets[idx2] != null) {
        currBucket = buckets[idx2];
        len1 = currBucket.length;
        for (idx3 = 0;idx3 < len1;idx3++)
          arr[idx1++] = currBucket[idx3];
      }
    }
    buckets = {};
  }
  console.log('* Radix Sort: ', new Date() - startRadix, 'ms', '\n');
  return arr;
}

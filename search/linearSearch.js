module.exports = (arr, target) => {
  let startLinear = new Date();
  for (var i = 0; i < arr.length; i++)
    if (arr[i] === target) {
      console.log('* Linear Search: ', new Date() - startLinear, 'ms', '\n');
      return i;
    }

  return -1;
}


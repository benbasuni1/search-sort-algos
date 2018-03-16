module.exports = arr => {
  let startPigeon = new Date();
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  let range = max - min + 1;
  let pigeonHole = new Array(parseInt(range));
  pigeonHole.fill(0);

  for (let i = 0; i < arr.length; i++)
    pigeonHole[arr[i] - min]++;

  let index = 0;
  for (let j = 0; j < range; j++)  {
    while (pigeonHole[j]-- > 0) 
      arr[index++] = j + min;
  }

  console.log('* Pigeonhole Sort: ', new Date() - startPigeon, 'ms', '\n');
  return arr;
}



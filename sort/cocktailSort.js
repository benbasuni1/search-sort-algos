module.exports = arr => {
  let startCocktail = new Date();
	let swapped;
	do {
		for(let i = 0; i < arr.length - 2; i++) {
			if(arr[i] > arr[i+1]) {
				let temp = arr[i];
				arr[i]   = arr[i+1];
				arr[i+1] = temp;
				swapped  = true;
			}
		}	

		if (!swapped) break;

		swapped = false;

		for( i = arr.length - 2; i > 0; i--) {
			if(arr[i] > arr[i+1]) {
				let temp1 = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp1;
				swapped = true;
			}
		}
	} while(swapped);

  console.log('* Cocktail Sort: ', new Date() - startCocktail, 'ms', '\n');
  return arr;
}


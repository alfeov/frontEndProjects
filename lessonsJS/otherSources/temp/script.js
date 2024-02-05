'use strict';

// function recurceFlat(depth, curArr) {

// }





function myFlat(depth = 1) {
	if (isNaN(depth)) {
		return this;
	}
	
	function flatten(currentArr, depth) {
		let tempArr = [];
		if (depth === 0) {
			currentArr.forEach(each => {
				if (each) tempArr.push(each);
			})		
			return tempArr;
		}
		if (depth < 1) {	
			return currentArr;
		}

		for (let i = 0; i < currentArr.length; i++) {
			let el = currentArr[i];
			if (el instanceof Array) {
				tempArr.push(...flatten(el, --depth));
			} else if (el) {
				tempArr.push(el);
			}
		}
		return tempArr;
	}

	return flatten(this, depth);
}
Array.prototype.myFlat = myFlat;






// Array.prototype.myFlat = function myFlat(depth) {
// 	if (isNaN(depth)) {
// 		return this;
// 	}

// 	function flatten(curArr, depth) {
// 		// if (depth === 1) {
// 		// 	return curArr.filter(x => !!x).flat();
// 		// }
// 		if (depth < 1) {
// 			return curArr.filter(x => !!x)
// 		}

// 		let tempArr = [];

// 		for (let i = 0; i < curArr.length; i++) {
// 			let el = curArr[i];
// 			if (el instanceof Array) {
// 				// let tempEl = 
// 				tempArr.push(...flatten(el, --depth));
// 			} else if (el) {
// 				tempArr.push(el);
// 			}
// 		}
// 		return tempArr;
// 	}

// 	return flatten(this, depth);
// }




let arr = [1, [2, 3], 1, , 1, [[4]], [5, 6], 7];

console.log(arr.myFlat(2));

console.log(arr.flat(2))
console.log(...[4])


		// let tempArr = [];
		// if (depth < 1) {
		// 	for (let i = 0; i < currentArr[i].length; i++) {
		// 		if (currentArr[i]) tempArr.push(currentArr[i]);
		// 	}
		// 	return tempArr;
		// }

		// let isFlat = true;
		// for (let i = 0; i < currentArr.length; i++) {
		// 	if (currentArr[i] instanceof Array) {
		// 		isFlat = false;
		// 		for (let j = 0; j < currentArr[i].length; j++) {
		// 			if (currentArr[i]) tempArr.push(currentArr[i][j]);
		// 		}
		// 	} else {
		// 		if (currentArr[i]) tempArr.push(currentArr[i]);
		// 	}
		// }
		// if (isFlat) {
		// 	return tempArr
		// }
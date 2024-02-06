'use strict';

// Array.prototype.myFlat = function myFlat(depth = 1) {
// 	// if () return this;
	
// 	if (isNaN(depth) || Math.floor(depth) <= 0) {
// 		return this.filter(x => !!x);
// 	}

// 	function flatten(arr, depth) {
// 		if (depth < 1 && depth !== 0) {
// 			return arr;
// 		}
// 		let tempArr = [];

// 		for (let i = 0; i < arr.length; i++) {
// 			const el = arr[i];
// 			if (el instanceof Array) {
// 				tempArr.push(...flatten(el, --depth)); 
// 			} else if (el) {
// 				tempArr.push(el);
// 			}
// 		}
// 		// console.log(tempArr);
// 		return tempArr;
// 	}

// 	return flatten(this, depth);
// }

Array.prototype.myFlat = function(){
	

	let tempArr = [];
	if (depth < 1) {
		for (let i = 0; i < currentArr[i].length; i++) {
			if (currentArr[i]) tempArr.push(currentArer[i]);
		}
		return tempArr;
	}

	let isFlat = true;
	for (let i = 0; i < currentArr.length; i++) {
		if (currentArr[i] instanceof Array) {
			isFlat = false;
			for (let j = 0; j < currentArr[i].length; j++) {
				if (currentArr[i]) tempArr.push(currentArr[i][j]);
			}
		} else {
			if (currentArr[i]) tempArr.push(currentArr[i]);
		}
	}
	if (isFlat) {
		return tempArr
	}


}
const inputArray = [0, 1, 2, [3, 4, [5,6]], 7];
console.log(inputArray.myFlat());

let arr = [1, [2, 3], 1, , 1, [[4]], [5, 6], 7];
// let arr = [1, ,[2], ,[3]];
// console.log(arr.myFlat());
// console.log(arr.flat());

console.log([1, [[2]], , [3]].myFlat());
console.log([1, [[2]], , [3]].flat());


		// d
'use strict';

// // f0 = 0
// // f1 = 1
// // fn = fn-1 + fn-2

// let mem = {};
// // let mem = new Map();

// const fib = (n) => {
// 	if (n === 0) {
// 		return 0;
// 	} else if (n === 1 || n === -1) {
// 		return 1;
// 	}

// 	if (n in mem) {
// 		return mem[n];
// 	}
// 	// if (mem.has(n)) {
// 		// return mem.get(n);
// 	// }

// 	let result;
// 	if (n > 0) {
// 		result = fib(n-1) + fib(n-2);
// 	} else {
// 		result = fib(n+2) - fib(n+1);
// 	}
	
// 	mem[n] = result;
// 	// mem.set(n, result);

// 	return result;
// }

// // console.log(fib(4));
// // console.log(fib(-4));
// // console.log(fib(8));
// // console.log(fib(-8));
// // console.log(fib(10));
// // console.log(fib(-10));
// console.time();
// console.log(fib(4000));
// console.timeEnd();

// //4	5	6	 7	 8	 9	10
// //3	5	8	13	21	34	55

// TODO

function flatten(...data) {
	// const result = [];
	// for (let i = 0; i < data.length; i++) {
	// 	const currentEl = data[i];
	// 	if (Array.isArray(currentEl)) {
	// 		result.push(...flatten(...currentEl));
	// 	} else {
	// 		result.push(currentEl);
	// 	}
	// }
	// return result;
	return data.reduce((acc, item) => 
		Array.isArray(item) 
			? acc.concat(flatten(...item)) 
			: acc.concat(item)
	, [])
}

console.log(flatten(1, [2, [[3]]], 4, 5, [6, [7]]));
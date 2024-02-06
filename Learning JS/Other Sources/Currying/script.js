'use strict';

function sum(a, b, c) {
	let res = a + b + c;
	return res;
}

function curry(callback) {
	return function inner(...args) {
		if (args.length >= callback.length) {
			return callback.apply(null, args);
		}
		return inner.bind(null, ...args);
	}
}

let curridSum = curry(sum);

console.log(curridSum(1, 2, 3));
console.log(curridSum(1)(2)(3));
console.log(curridSum(1, 2)(3));


'use strict';

function sum(a, b) {
	return a + b;
}


function memoize(fn) {
    
	const cache = {};
 
	return function(...args) {
		const key = args.join(',');
		
		if (key in cache) {
			return cache[key];
		}
		
		const result = fn.apply(this, args);
		cache[key] = result;
		
		return result;
 	}
 
}

const memoizedFn = memoize(sum);
console.log(memoizedFn(3, 4));
console.log(memoizedFn(3, 4));
console.log(memoizedFn(3, 8));
/** 
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/
'use strict';

let person = {
	name: 'Anton',
	age: 19,
	job: 'Backend-Developer',
	funct: function (...arg) {
		let temp = [...arguments];
		console.log(arg);
		return arg;
	}
}
let person2 = {
	name: 'Nasty',
	age: 17,
	job: 'Military',
}

// person.funct('hell no', 'no');


let res
// res = person.funct.apply(person2, ['hell no', 'no']);
// console.log(res);

// res = person.funct.bind(person2, 'hell no', 'no');
// console.log(res());

// res = person.funct.call(person2, 'hell no', 'no');
// console.log(res);

Object.prototype.funct = person.funct;
person2.funct('hello');

//?


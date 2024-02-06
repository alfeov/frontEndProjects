'use strict';

function addX(x) {
	return function addY(y) {
		return x + y;
	}
}

const add7 = addX(7);
// console.log(add7(2));
// console.log(add7);

// function once(callback) {
// 	let isCalled = false;
// 	let cache;

// 	return function closure(arg) {
// 		if (isCalled) return cache;
// 		isCalled = true;
// 		return cache = callback(arg);
// 	}
// }

// const addByFive = once((num) => num + 5);
// console.log(addByFive(2));
// console.log(addByFive(4));

//TODO

let person = {
	name: 'Anton',
	age: 19,
	job: 'Backend-Developer',
}

function logPerson(...arg) {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
	console.log(...arg);
}

function bind (person, funct) {
	return function(...args) {
		console.log(args);
		funct.call(person, ...args);
	}
}

const returnedFunction = bind(person, logPerson);
returnedFunction('hi arg start', 'hi arg end');

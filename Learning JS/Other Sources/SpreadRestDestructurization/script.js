'use strict';

// let obj = {
// 	name: 'Anton', 
// 	age: 19,
// 	city: 'Brest'
// }

// console.log({...obj}, {...obj});

// let {name, age, ...c} = obj;
// console.log(name, age, c);

// function calcValues(a, b) {
// 	return [
// 		a + b,
// 		a - b,
// 		a * b,
// 		a / b
// 	]
// }

// const [sum, sub, ...rest] = calcValues(12, 2);
// const [sum, , ...rest] = calcValues(12, 2);
// console.log(sum, sub, rest);
// console.log(sum, rest);

let person = {
	name: 'Anton', 
	age: 19,
	address: {
		country: 'Belarus',
		city: 'Brest',
		Region: 'Varshavka'
	}
}

const {
	name: firstName,
	age = 'No age info',
	car = 'No car info'
} = person;

// console.log(name, firstName, age, car);

// // const {city} = person.address;
// // console.log(city);

// const {address: {city}} = person;
// console.log(city);

// function logPerson(per) {
// 	console.log(per.name +  ' ' + per.age);
// }
// function logPerson({name, age}) {
// 	console.log(name +  ' ' + age);
// }

// logPerson(person);

// const newPerson = {...person};

function total(a, b, ...rest) {
	return a + b + rest.reduce((prev, curr) => prev + curr)
}

// console.log(total(1, 2, 3, 4, 5));

// const numbers = [];
// const [
// 	first, 
// 	second, 
// 	...rest
// ] = numbers;
// //	undefined, undefined, []

// const numbers = [];
// const [
// 	first = 0, 
// 	second = 0, 
// 	...rest
// ] = numbers || [];
// first;
// second;
// rest;
//	0, 0, []

// const numbers = [1, [2, 3], 4, 5];
// const numbers = [];
// const [
// 	first = 0, 
// 	[second = 0, third = 0] = [], 
// 	...rest
// ] = numbers || [];
// console.log(first, second, third, rest);
//						1 			2 			3 	[4, 5]

const myObj = {
	a: 1,
	b: 2,
	c: {
		a: 11,
		b: 12,
	},
	d: 4,
	arr: [1, 2, 3]
}

// const {a, d, ...rest} = myObj;
// console.log(a, d, rest);


// const {
// 	a: a1 = 0, 
// 	c: {
// 		a: a2 = 0, b: b2 = 0
// 	} = {},
// 	d: d1 = 0, 
// 	arr: [
// 		arr1 = 0,
// 		arr2 = 0,
// 		arr3 = 0,
// 	] = [],
// 	r: r1 = 0, 
// 	...rest
// } = myObj || {};
// console.log(a1, a2, b2, d1, arr1, arr2, arr3, rest, r1);

// let a, b;
// let obj = undefined;
// ({a = 0, b = 0} = obj || myObj || {});
// console.log(a, b);

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let {
// 	id = null,
// 	size: {width: w = 0, height: h = 0} = {}, 
// 	items: [
// 		item1 = 'No info', 
// 		item2 = 'No info',
// 		...otherItems
// 	] = [],
// 	extra = false,
// 	...rest
// } = options || {};

// console.log(id, w, h, item1, item2, otherItems, extra, rest);


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
	let retName = null;
	let maxSal = 0;
	for (let [key, value] of Object.entries(salaries)) {
		if (value > maxSal) {
			maxSal = value;
			retName = key;
		}
	}
	return retName;
}

console.log(topSalary(salaries));
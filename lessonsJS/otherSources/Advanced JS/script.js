'use strict';

// let obj = {name: 'Alexey'}
// let obj1 = obj;
// let arr = []
// console.log(Object.is(obj, obj1));

// let myToString = function (data){
// 	let type = Object.prototype.toString.call(data);
// 	console.log(type);
// 	return type;
// }
// // console.log(myToString.call(arr));
// let returned = myToString(undefined);
// console.log(returned);

// let testObj = {};
// Object.setPrototypeOf(testObj, obj);
// console.log(testObj);

//? Object propertys

// let obj = {};

// Object.defineProperty(obj, 'key1', {value: 'val1', writable: true});
// obj.key1 = 'val2';
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptors(obj));
// for (let key in obj) {
// 	console.log(obj[key]);
// }

//? Symbol

// let obj = {};

// let s1 = Symbol('s1');
// obj[s1] = 'data1';
// let s2 = Symbol('s1');

// let s1 = Symbol.for('s1');
// obj[s1] = 'data1';

// console.log(obj);
// let s2 = Symbol.for('s1');
// console.log(obj[s2]);

// console.log(Symbol.keyFor(s2));
// console.log(s1.description);

// console.log(Object.hasOwn(obj, s1));
// console.log(Object.getOwnPropertyDescriptors(obj));

//? functions 

// console.dir(Function);

// //? Classes

// let fun = function() {};
// console.log(fun instanceof Function)

//?

// let obj = {
// 	func() {
// 		setTimeout(() => {
// 			console.log(this);
// 		}, 1000);
// 	}
// }
// obj.func();

//TODO myReduce

// function myReduce(callback, initValue) {
// 	let newValue = 0;
// 	let accumulator = initValue ? initValue : this[0];
// 	let startIterPnt = initValue ? 0 : 1;
// 	for (let i = startIterPnt; i < this.length; i++) {
// 		accumulator = callback.call(this, accumulator, this[i]);
// 	}
// 	newValue = accumulator;
// 	return newValue;
// }
// Array.prototype.myReduce = myReduce;

// let arr = [1, 2, 3];
// console.log(arr.myReduce((x, y) => x * y, 2));

//TODO myMap

// function myMap(callback, thisArg) {
// 	let returnedArr = [];
// 	thisArg = thisArg ? thisArg : this;

// 	for (let i = 0; i < this.length; i++) {
// 		if (this[i]) {
// 			returnedArr[i] = callback.call(thisArg, this[i], i, this);
// 		} else {
// 			delete returnedArr[i];
// 		}
// 	}
// 	return returnedArr;
// }
// Array.prototype.myMap = myMap;

// let arr = [1, , 3];
// console.log(arr.myMap(x => x));


// console.log(arr.map(x => x));

//TODO myFilter

function myFilter(callback, thisArg) {
	let returnedArr = [];
	thisArg = thisArg ? thisArg : this;

	for (let i = 0; i < this.length; i++) {
		if (this[i] && callback.call(thisArg, this[i], i, this)) {
			returnedArr.push(this[i]);
		} 
	}
	return returnedArr;
}
Array.prototype.myFilter = myFilter;

// let arr = [1, , 3];
// console.log(arr.myFilter(x => x > 2));


const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter((word) => word.length > 6);

console.log(result);
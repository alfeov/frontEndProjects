'use strict';
// const arr = ['squirrel', 'alpaca', 'buddy'];
// // arr.forEach(e => console.log(e));

// let message = ['js', 'is the', 'best', 'proggraming', 'language', ...arr, 'do you agree?'];
// message.forEach(e => console.log(e));

// function summSpread(x, y) {
// 	console.log(x + y);
// }


// let nwArr = [3, 4]; 
// summSpread(...nwArr);
// //! summSpread([3, 4]); is wrong

// function summRest (x, ...y) {
// 	let temp = x;
// 	y.forEach((y) => {
// 		temp += y;
// 	})
// 	console.log(temp);
// }

// summRest(3, 4, 5, 6, 7);

//!

// function operator (a, b, c) {
// 	if (c === undefined) {
// 		console.log(undefined);
// 	} else if (isNaN(c)) {
// 		console.log(NaN);
// 	}
// }

// operator(1, 2);

//?

// let operator = (a, b, c) => {
// 	let temp = 'isn\'t NaN';
// 	if (c === undefined) {
// 		temp = undefined;
// 	} else if (isNaN(c)) {
// 		temp = NaN;
// 	}
// 	return temp;
// }

// let message = operator(1,2,3);
// console.log(message);

//!

// let check;

// let fun = () => {check = 1;
// console.log(check);}

// fun();

// console.log(check);

//!

// function test(x) {
// 	console.log(x);
// }

// test(1);
// console.log(x);
//error with strict mode

//!

//CLUSURES!!!
// function closures (x) {
// 	function innerFunc() {
// 		console.log(x);
// 	}
// 	return innerFunc;
// }

// let temp = closures('Closure is WORKS!!!');
// temp();

//!

// console.log(x);
// var x = 'z';

//?

// let x = 'global';

// function localVariable(x = 'local') {
// 	console.log(x);
// }

// localVariable();
// console.log(x);

//?

// function wow () {
// 	x = 'WOW!!!';
// 	console.log(x);
// }

// wow();
// console.log(x);
//! it works without strict!!!

//? IIFE

// (function IIFE() {console.log('IIFE!')})();

// (() => {console.log('IIFE')})();

// let variable = 1000;
// let result = (function IIFE() {
// 	variable = 2000;
// 	return variable;
// })();
// console.log(result);
// console.log(variable);

// (function (variable) {
// 	// variable = param;
// 	console.log('variable is: ' + variable);
// })(100);

//? recursion

// function recursion (param) {
// 	if (param === 0) return 1;
// 	return param * recursion(param - 1);
// }

// let input = 3;

// console.log(recursion(input));

//? nested functions

// let start = 10;
// function nested(start) {
// 	console.log(start);
// 	if (start < 1) return;
// 	nested(--start);
// }
// nested(start);


// function nested_2 (start) {
// 	console.log(start);
// 	if (start > 0)
// 		nested_2(--start);
// }
// nested_2(start);

//? anonimus functions

// let funname = function () {
// 	console.log('x');
// }

// function callback (fun) {
// 	fun();
// 	console.log('Ligging');
// }
// callback(funname);

//TODO PROJECTS

//? recursion until 10

// function recursion (start) {
// 	console.log(start);
// 	if (start < 10) recursion(++start);
// 	return;
// }

// recursion(4);

//? setTimeout()

// let one = () => console.log('one');
// let two = () => console.log('two');

// let three = () => {
// 	console.log('three');
// 	one();
// 	two();
// }

// (() => {
// 	console.log('four');
// 	setTimeout(three, 0);
// 	setTimeout(one, 0);
// })();







// function testf () {
// 	console.log(test1);
// 	var test1 = 'test1';
// }
// testf();
// console.log(test1);

// let testFunction = (function() {
// 	let test = 'test';
// 	return 'a';
// })();
// console.log(testFunction);
// console.log(test);

// let test2 = (num) => num + 5;
// console.log(test2(5));

// var test = function test () {}
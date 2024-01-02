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
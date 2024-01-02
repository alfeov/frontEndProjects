// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];

// do {
// 	if (!(nr1 === nr2)) fibonacciArray.push(nr1);
// 	temp = nr1 + nr2;
// 	nr1 = nr2;
// 	nr2 = temp;	
// } while (!(fibonacciArray.length >= 25));

// console.table(fibonacciArray);
'use strict';
// let objArr = [], objValue, obj = {};

// for (let i = 0; i < 10; i++) {
// 	objValue = (i % 2) ? false : true;
// 	obj = {
// 		name: `lesson ${i}`,
// 		value: objValue,
// 	};
// 	objArr.push(obj);
// }

// console.log(objArr);

//! 

// let N = prompt('N'), M = prompt('M');
// let arr = [];

// for (let i = 0; i < N; i++) {
// 	arr.push([]); 
// 	for (let j = 0; j < M; j++) {
// 		arr[i].push(i);
// 		if (i === j) arr[i][j] = 99;
// 	}
// }
// console.table(arr);


// function ctb(arr, N, M) {
// 	for (let i = 0; i < N; i++) {
// 		for (let j = 0; j < M; j++) {
// 			arr[i].splice(j,1,j);
// 			if (i === N-j-1) arr[i][j] = 99;
// 		}
// 	}
// 	console.table(arr);
// }
// setTimeout(ctb, 0, arr, N, M);

//!



// let n = prompt('numbers of values:'), setOfN = prompt('Group by X elements');
// let setsOfN = (n - (n % setOfN)) / setOfN;
// console.log(setsOfN);
// let arr = [];
// let counter = 1;
// for (let i = 0; i < setsOfN; i++) {
// 	arr.push([]);
// 	for (let j = 0; j < setOfN; j++) {
// 	arr[i].push(counter++);
// 	}
// }
// arr.push([]);
// for (let j = 0; j < n % setOfN; j++) {
// arr[setsOfN].push(counter++);
// }
// console.log(arr);

//?

// console.time(); 
// const grid = [];
// let counter = 0;
// let row;
// for (let x = 0; x < (64 + 1); x++) {
// 	if((counter % 8) === 0) {
// 		if (row !== undefined) {
// 			grid.push(row);
// 		}
// 		row = [];
// 	}
// 	counter++;
// 	let temp = counter;
// 	row.push(temp);
// }

// console.log(grid);


//!

// let b = [];
// let arr = ['1','2'];
// for (let i of arr) {
// 	b.push('1');
// }
// console.log(b);
// let obj = {
// 	name: 'Name',
// 	value: 21,
// 	color: 'black',
// 	multiply: 300
// }
// console.log(obj);


// for (let i in obj) {
// 	console.log(i + ': ' + obj[i]);
// }

//!

// let x = prompt('x');
// let n = prompt('n');

// console.time(); 

// function fastMult(x, n) {
// 	let result = 1;
// 	while (n > 0) {
// 		if (n % 2) {
// 			result *= x;
// 			n--;
// 		} else {
// 			x *= x;
// 			n /= 2;
// 		}
// 	}
// 	return result;
// }

// console.log(fastMult(x,n));

// console.timeEnd();



// console.time(); 

// console.log(x ** n);

// console.timeEnd();


//!

// let obj = {
// 	name: 'Name',
// 	value: 21,
// 	color: 'black',
// }

// for (let i in obj) {
// 	console.log(i + ': ' + obj[i]);
// }

// console.timeEnd();

// let arr = [
// 'Name',
// 21,
// 'black'
// ]

// for (let i in arr) {
// 	console.log(i);
// 	i = Number(i) + 3;
// 	console.log(i);
// }
// console.log(arr);
//!

// let obj = {
// 	name: 'Name',
// 	value: 21,
// 	color: 'black',
// }

// for (let [key, value] of Object.entries(obj)) {
// 	console.log(key + ': ' + value);
// }

// of in keys valus entries

//!

// let str = '';
// const skip = 4;

// for (let i = 0; i < 10; i++) {
// 	if (i === skip) continue;
// 	str += i + ' ';
// }
// console.log(str);

//!

// const arr = [];
// const max = 16;

// for (let i = 0; i <= max; i++) {
// 	arr.push([]);
// 	for ( let j = 0; j <= max; j++) {
// 		arr[i].push(i * j);
// 	}
// }
// console.table(arr);

//!
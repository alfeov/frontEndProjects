'use strict';

//?
// let s = 'Knopfler';
// console.log(
// 	s
// 	.concat(' - what is that???')
// 	.toUpperCase()
// 	.toLowerCase()
// 	.replace('what','WTF')
// 	.concat(' Oh, it\'s amazing train!')
// );

//? encode and decode URI/URL
// let uri = '/Heorhi, ?Kavaliou: @Antonavich&=+$_#';
// uri = encodeURIComponent(uri);
// console.log(uri);
// uri = decodeURIComponent(uri);
// console.log(uri);

//? parser
// let str = '13left1';
// console.log(parseInt(str));
// console.log(str);

// let str1 = '13.0';
// console.log(parseFloat(str1));
// console.log(str1);

//? arrays methods

// function func (val) {
// 	return typeof(val) === 'number';
// }
// function func1 (val) {
// 	return val > 1;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.every(func));
// console.log(arr.every(func1));

// arr.copyWithin(3, 0);
// console.log(arr);

// let arr1 = arr.map(e => e ** e);
// console.log(arr1);

// console.log(arr.findLastIndex(e => e === 5));
// console.log(arr.lastIndexOf(5));

// console.log(arr.findLastIndex(e => e == '5')); //! == 
// console.log(arr.lastIndexOf('5'));

// console.log(arr.findLastIndex(e => e === 6));
// console.log(arr.lastIndexOf(6));


// console.log(arr.findLastIndex((e) => {
// 	console.log('turn');
// 	return e === 5;
// }));

//TODO

// let arr = ['Laurence', 'Mike', 'Larry', 'Kim', 'Joanne', 
// 'Laurence', 'Mike', 'Laurence', 'Mike', 'Laurence', 'Mike'];
// arr = arr.filter((e, i) => {
// 	return arr.indexOf(e) === i;
// });

// let arr1 = arr.toReversed();
// let arr2 = arr.toSpliced(0, 1, '1');
// let arr3 = arr.toSorted();
// console.log('Reversed:', arr1)
// console.log('Spliced:', arr2);
// console.log('Sorted:', arr3);
// console.log(arr);

// let arrOfNumbers = [1, 2, 3, 4, 5];
// console.log(arrOfNumbers.map(e => e * 2));

//? string methods

// let str = 'Gelenkopff';
// str = str.concat(' - what').concat(' is that?');
// console.log(str);
// str = str.split(' ');
// console.log(str);
// str = str.join(' ');
// console.log(str);
// let indexOfFf = str.indexOf('ff');
// if (indexOfFf !== -1) {
// 	console.log(indexOfFf);
// }
// console.log(str.charAt(11));

// let start = str.indexOf('G');
// let end = str.indexOf(' ');
// let str1 = str.slice(start, end);
// console.log(str1);
// let start = str.indexOf(' ');
// let end = str.indexOf(' ', str.indexOf(' ')+1);
// let str1 = str.slice(start+1, end);
// console.log(str1);
// str = str.toUpperCase();
// str = str.toLowerCase();
// str = str.replace('what', 'WHO');
// console.log(str);
// str = str.replaceAll('e', 'E');
// console.log(str);

// console.log(str.toLowerCase().startsWith('gel'));
// console.log(str.toLowerCase().endsWith('at?'));
// let arr = [1];


// const words = [[1, 2], 3];
// const characters = words.flatMap(word => {
// 	if (typeof(word) === 'object') return word.map(elem => elem * 2)
// 	else if (typeof(word) === 'number') return word * 2;
// });
// console.log(characters);

//TODO

// let str = 'thIs will bi capiTalized for each word';
// str = str.toLowerCase().split(' ');
// for (let i = 0; i < str.length; i++) {
// 	str[i] = str[i].charAt(0).toUpperCase().concat(str[i].slice(1));
// }
// str = str.join(' ');
// console.log(str);

// let glasn = ['a', 'e', 'i', 'o', 'u'];
// glasn.forEach((each) => {
// 	str = str.replaceAll(each, glasn.indexOf(each));
// })
// console.log(str);

//TODO

// let str = 'this word. is amazing? amazing... yes!!! yes...';
// //!add . ? ! after all-1
// //!map???

// console.table(str);
// console.log(str);

//? numeric methods

// let strange = 'Infinity'; //strinsg is not a number => is not Finite
// //Infinity, NaN, Undefined = false
// console.log(isFinite(strange));

// let x = 3, str = 'str';
// console.log(Number.isInteger(undefined));

// console.log((1/5).toFixed(20));
// x = (x/7).toFixed(20);
// console.log(x); //typeof = string but ,xxx n(x) is longer then default valus

// console.log(Number(23000).toPrecision(2));

// console.log(Math.sqrt(Math.min(Math.pow(1, 2), 2, 3)));

// let a = 3.2, b = 5.7;
// console.log(Math.round(a), Math.ceil(a), Math.floor(a));
// console.log(Math.round(b), Math.ceil(b), Math.floor(b));
// let c = -3.2, d = -5.7;
// console.log(Math.round(c), Math.ceil(c), Math.floor(c));
// console.log(Math.round(d), Math.ceil(d), Math.floor(d));
// console.log(Math.trunc(a), Math.trunc(b), 
// 	Math.trunc(c), Math.trunc(d)
// );

// console.log(Math.floor(a), Math.floor(b), 
// 	Math.floor(c), Math.floor(d)
// );

// console.log((Math.exp(Math.log(2) * 3)).toPrecision(8));

//TODO

// console.log(Math.PI);
// let x = 5.7;
// console.log(
// 	Math.ceil(x),
// 	Math.floor(x),
// 	Math.round(x),
// );
// function random (repeat) {
// 	let temp = [];
// 	for (let i = 0; i < repeat; i++) {
// 		temp.push(Math.floor(Math.random() * 100) + 1);
// 	}
// 	// console.log('Max from iteration: ', Math.max(...temp));
// 	// console.log('Min from iteration: ', Math.min(...temp));
// 	console.log('Spread is: ', Math.max(...temp) - Math.min(...temp));
// }

// let arr = [0, 1, 2];
// console.log(Math.max(...arr));

// setInterval(random, 1000, 5);

//? date methods

//TODO
// let date = new Date();

// let yourDateOfBirthdayMONTH = 5;
// date.setDate(21);

// date.setMonth(yourDateOfBirthdayMONTH - 1);
// let test = date.getDay();
// console.log(date, (test + 6) % 7 + 1);
// let nowYear = date.getFullYear();
// let arrDaysOfWeek = [0, 1, 2, 3, 4, 5, 6];
// let arrOfDaysForCheck = [];
// let currentDayOfWeek;
// currentDayOfWeek = date.getDay();
// let previousDayOfWeek = -1;

// for (let i = 0; i < 50; i++) {
// 	date.setFullYear(nowYear + i);
// 	currentDayOfWeek = date.getDay();
// 	if (previousDayOfWeek > currentDayOfWeek) {
// 		console.log(arrOfDaysForCheck);
// 		arrDaysOfWeek.forEach((e) => {
// 			if (arrOfDaysForCheck.indexOf(e) === -1) 
// 				console.log('Iteration without day: ', (e + 6) % 7 + 1);
// 		});
// 		arrOfDaysForCheck = [];
// 	}
// 	arrOfDaysForCheck.push(currentDayOfWeek);
// 	previousDayOfWeek = currentDayOfWeek;
// 	console.log((currentDayOfWeek + 6) % 7 + 1);
// }
//TODO


// let date = new Date();
// date.setMonth(4);
// console.log(date);
// let nowMonth = date.getMonth();
// let monthArr = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'D'];
// console.log(monthArr[nowMonth]);

//TODO

// let str = 'string';
// let newArr = str.split('');
// let tempRandom;
// let arrOfNewIndex = [];

// function randomize(max) {
// 	tempRandom = Math.floor(Math.random() * max);
// 	if (arrOfNewIndex.indexOf(tempRandom) !== -1) {
// 		randomize(max);
// 	}
// }

// function newIndexArrCreature() {
// 	for (let i = 0; i < newArr.length; i++) {
// 		randomize(newArr.length);
// 		arrOfNewIndex.push(tempRandom);
// 	}
// }
// newIndexArrCreature();


// let tempArr = [];
// for (let i = 0; i < newArr.length; i++) {
// 	tempArr.push(newArr[arrOfNewIndex[i]]);
// }
// newArr = tempArr;
// newArr = newArr.join('');

// console.log(newArr);

//TODO
let str = 'string';
console.log(str = str.substring(0,3));
// let str = '01.01.2025'
// let date = Date.parse(str);

// let restTime;
// let objWithRestTime = {};
// function rest() {
// 	restTime = date - new Date();
// 	let Seconds = Math.floor(restTime/1000);
// 	let Minutes = Math.floor(Math.floor(restTime/1000)/60);
// 	let Hours = Math.floor(Math.floor(restTime/1000)/3600);
// 	let Days = Math.floor(Math.floor(restTime/1000)/86400);
// 	objWithRestTime = {
// 		Seconds,
// 		Minutes,
// 		Hours,
// 		Days
// 	};
// }

// function print() {
// 	setTimeout(() => {
// 		rest();
// 		for (let key in objWithRestTime) {
// 			console.log(`${key}: ${objWithRestTime[key]}`);
// 		}
// 		print();
// 	}, 1000)
// }

// setTimeout(print, 1000);


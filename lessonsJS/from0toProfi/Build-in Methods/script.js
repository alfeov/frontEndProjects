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
// //! . in the start of converse bug
// console.log(str);

// str = str.split('.');

// console.table(str);

// function addDots (str) {
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] !== '') {
// 			str[i] = str[i].split('');
// 			str[i].push('.');
// 			str[i] = str[i].join('');
	
// 			console.log(str[i]);
// 		}
// 	}
// 	for (let i = 0; i < str.length - 1; i++) {
// 		let temp = str.indexOf('');

// 		str[temp-1] = str[temp-1].split('');

// 		let tempEnd = temp + 1;
// 		while (str[tempEnd] === '') {
// 			tempEnd++;
// 		}

// 		if (str[tempEnd + 1] === undefined) {
// 			for (let j = 0; j < tempEnd - temp - 1; j++) {
// 				str[temp-1].push('.');
// 			}
// 		} else {
// 			for (let j = 0; j < tempEnd - temp; j++) {
// 				str[temp-1].push('.');
// 			}
// 		}

// 		str[temp-1] = str[temp-1].join('');

// 		str.splice(temp, tempEnd - temp);
// 	}
// 	for (let i = 1; i < str.length; i++) {
// 		str[i] = str[i].split('');
// 		str[i].shift();
// 		str[i] = str[i].join('');
// 	}
// }
// addDots(str);

// for (let i = 0; i < str.length; i++) {
// 	str[i] = str[i].split('?');
// 	// str[i] = str[i].join('');
// }

// //!add . ? ! after all-1
// //!map???

// console.table(str);
// str = str.join('');
// console.log(str);

//? numeric methods
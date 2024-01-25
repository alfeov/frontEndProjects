'use strict';

//TODO

// function greet(fullNameArr) {
// 	if (fullNameArr.length === 2) {
// 		console.log('Welcome', fullNameArr[0], fullNameArr[1] + '!');
// 	}
// }

// function funct(fullName, callback) {
// 	let fullNameArr = fullName.split(' ');
// 	callback(fullNameArr);
// }

// funct('Hello World', greet);

//?

// let promise = new Promise((res, rej) => {
// 	let x = 9;
// 	if (x > 10) {
// 		res(x);
// 	} else {
// 		rej('No way bro');
// 	}
// });
// promise.then((value) => {
// 	console.log(value);
// 	return value;
// }, (error) => {
// 	console.log(error);
// 	return error;
// }).then(value => {
// 	console.log(value);
// }).catch(value => {
// 	console.log(value);
// })

//?

// let promise = new Promise((res, rej) => {
// 	let x = 9;
// 	if (x > 10) {
// 		res(x);
// 	} else {
// 		rej('No way bro');
// 	}
// });
// promise.then((value) => {
// 	console.log(value);
// 	return value;
// }).then(value => {
// 	console.log(value);
// }).catch(value => {
// 	console.log(value);
// })

//TODO

// const counter = function(value) {
// 	console.log(value);
// };
// const promise = new Promise((res) => {
// 	res('Start Counting');
// }).then((value) => {counter(value);return 'One';})
// 	.then((value) => {counter(value);return 'Two';})
// 	.then((value) => {counter(value);return 'Three';})
// 	.then((value) => {counter(value);});

//TODO

// let counter = 0;

// function count() {
// 	return new Promise(res => {
// 		setTimeout(() => {
// 			counter++;
// 			res(counter);
// 		},1000);
// 	})
// }

// async function asyncrony(value) {
// 	console.log(counter, value);
// 	await count();
// 	console.log(counter, value);
// }

// for (let x = 1; x < 4; x++) {
// 	asyncrony(x);
// }

//?

// function testAwait() {
// 	return new Promise((res) => {
// 		setTimeout(() => {
// 			res();
// 		}, 3000)
// 	})
// }
// (async function testAsync(value) {
// 	await testAwait();
// 	console.log('Ready'); //!execute after previous line complete
// })();

//?

// let counter = 0;

// function count(is) {
// 	return new Promise(res => {
// 		setTimeout(() => {
// 			counter++;
// 			console.log(counter, is);
// 			res();
// 		},0);
// 	})
// }

// async function asyncrony(value) {
// 	console.log('s', counter, 'A' + value);
// 	await count('A' + value);
// 	await asyncrony2(value);
// 	console.log('e', counter, 'A' + value);
// }
// async function asyncrony2(value) {
// 	console.log('s', counter, 'A' + value + value);
// 	await count('A' + value + value);
// 	console.log('e', counter, 'A' + value + value);
// }

// for (let x = 1; x <= 2; x++) {
// 	asyncrony(x);
// }

//TODO

let passwordArr = [12345, 12354];

logging();

function logging() {
	let password = 12345;
	test(password);
}
function promise(password) {
	return new Promise((res, rej) => {
		if (passwordArr.includes(password)) {
			res('Enter');
		} else {
			rej('No way!');
		}
	});
}
function test(password) {
	promise(password)
		.then(value => {console.log(value)})
		.catch(value => {console.log(value)});
}

// function addOne(val) {
// 	return val + 1;
// }
// function total(a, b, callback) {
// 	const sum = a + b;
// 	return callback(sum);
// }
// console.log(total(4, 5, addOne));

// let promiseS = new Promise((res, rej) => {
// 	rej(new Error('Oh no'));
// }).catch(value => console.log(value))
// 	.finally(() => {
// 		console.log('done');
// 	})

// async function myFun() {
// 	return 'Hello';
// }
// myFun().then(
// 	(value) => {console.log(value)},
// 	(err) => {console.log(err)}
// )
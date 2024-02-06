'use strict';

// Promise.resolve().then(() => {
// 	console.log('res');
// })

// console.time();
// console.log('Hello');
// console.timeEnd();
//! 16.6
// let reqID;

// function funcTest() {
// 	console.log('tick');
// 	reqID = requestAnimationFrame(funcTest);
// }
// reqID = requestAnimationFrame(funcTest);

// setTimeout(() => {
// 	cancelAnimationFrame(reqID);
// }, 1000);

// requestIdleCallback(() => {
// 	console.log('hello');
// }, {timeout: 5000});

// queueMicrotask(() => {
// 	console.log('micro');
// })
// console.log('hello');

/*
1
tasks (timers, postMessage)
2
microtasks (promises, async, await, observers, queueMicroT)
3 
rAF
4
aIC
*/

// syncOrAsync((arg) => {
// 	console.log(arg);
// })

// function syncOrAsync(callback) {
// 	callback('hell');
// }

//? Promises

// Promise.resolve('res')
// 	.finally(() => console.log('fin'))
// 	.then((value) => {console.log(value)})

// const setPromise = (val, time, isRej = false) => 
// 	new Promise((res, rej) =>
// 		setTimeout(() => isRej ? rej(val) : res(val), time));
		
// Promise.all([
// 	setPromise('Ok', 100),
// 	setPromise('Not Ok', 200, true),
// ]).then(value => console.log(value))
	// .catch(value => console.log(new Error(value))); //!value is rej arg

// Promise.all([
// 	setPromise('Ok', 100),
// 	setPromise('Ok', 200),
// 	setPromise('Ok', 200),
// 	setPromise('Ok', 200),
// 	setPromise('Ok', 200),
// ]).then(value => console.log(value));

// Promise.race([
// 	setPromise('Not Ok', 100, false),
// 	setPromise('Ok', 100),
// 	setPromise('Not Ok', 200, true),
// ]).then(value => console.log(value));

// Promise.race([
// 	setPromise('Not Ok', 99, true),
// 	setPromise('Not Ok', 200, true),
// ]).then(value => console.log(value))
	// .catch(value => console.log(new Error(value))); //!value is rej arg

// Promise.any([
// 	setPromise('Ok', 100),
// 	setPromise('Not Ok', 200, true),
// ])
// 	.then(value => console.log(value))

// Promise.any([
// 	setPromise('Not Ok', 100, true),
// 	setPromise('Not Ok', 200, true),
// ])
// 	.then(value => console.log(value))
// 	.catch(e => {
// 		console.log(e.message); //!All were rej
// 		console.log(e.errors); //!They val
// 	});

// Promise.allSettled([
// 	setPromise('Ok', 100),
// 	setPromise('Not Ok', 200, true),
// ])
// 	.then(arr => {
// 		console.log(arr);
// 		arr.forEach((each) => {
// 			if (each.status === 'rejected') {
// 				console.log(each.reason);
// 			} else {
// 				console.log(each.value);
// 			}
// 		})
// 	})


// Promise.allSettled([])
// 	.then(value => console.log(value))
// Promise.all([])
// 	.then(value => console.log(value))
//[]

// Promise.race([]).then(value => console.log(value)); //! infinty awaiting

// Promise.any([setPromise('Ok', 100, true)]).catch((e) => {
// 	if (e.errors[0] !== undefined) {
// 		console.log(e.message);
// 	}
// });

// function fetchLongReq() {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			console.log('complete');
// 			res(['pic1', 'pic2']);
// 		}, 3000);
// 	})
// 	// .then((value) => {
// 	// 	return value = 'hello';
// 	// }).finally((value) => {
// 	// 	return value = 'finit';
// 	// })
// }

// async function awaiting(callback) {
// 	return await callback();
// }

// Promise.race([
// 	// fetchLongReq(),
// 	// new Promise((res, rej) => {
// 	// 	setTimeout(() => {
// 	// 		rej('was rej');
// 	// 	},2500);
// 	// }),
// 	// setPromise('val', 3000),
// 	awaiting(fetchLongReq) //!UNDEFINED without return
// ]).then(value => console.log(value))
// 	.catch(e => console.log(e));

// // import {
// // 	value,
// // 	promise
// // } from './module.mjs'

// // (async () => {
// // 	await promise;
// // 	console.log(value);
// // })
// a

//TODO
// const asyncWrapper = (async () => {
// 	const articlesPromise = setPromise(['article1', 'article2'], 2000);
// 	const picturesPromise = setPromise(['picture1', 'picture2'], 2000);

// 	const articles = await articlesPromise;
// 	const pictures = await picturesPromise;
// 	console.log(articles, pictures);
// })();

//TODO
// const asyncWrapper = (async () => {
// 	const [articles, pictures] = await Promise.all([
// 		setPromise(['article1', 'article2'], 3000),
// 		setPromise(['picture1', 'picture2'], 3000)
// 	]);
// 	console.log(articles, pictures);
// })();

// const setPromise = (value, time, isRejected = false) => 
// 	new Promise((res, rej) => 
// 		setTimeout(() => isRejected ? rej(value) : res(value), time))

// const asyncWrapper = () => {
// 	return Promise.all([
// 		setPromise(['article1', 'article2'], 3000),
// 		setPromise(['picture1', 'picture2'], 3000),
// 	]);
// };

// (async function landing() {
// 	try {
// 		let [articles, pictures] = await asyncWrapper();
// 		console.log(articles, pictures);
// 	} catch(e) {
// 		console.log(e);
// 	}
// })();

// async function letItBee2() {
// 	const picturesPromise = setPromise(['picture1', 'picture2'], 4000);
// 	const pictures = await picturesPromise;
// 	console.log(pictures);
// };
// letItBee2();

// async function letItBee() {
// 	const articlesPromise = setPromise(['article1', 'article2'], 1000);
// 	const articles = await articlesPromise;
// 	console.log(articles);
// };
// letItBee();


let urls = ['/url1', '/meta'];

// (async () => {
// 	console.time('def');
// 	let resArr = await arr.reduce(async (acum, curVal) => {
// 		return (await acum) + curVal
// 	}, 2);
// 	console.timeEnd('def');
// 	console.log(resArr);
// })(); 

// console.time('newTime');
// let resArr = arr.reduce( (acum, curVal) => acum + curVal, 2);
// console.timeEnd('newTime');

(async () => {
	let promises = urls.map(async (x) => {
		return (await JSON.stringify(x));
	})
	let resArr = await Promise.all(promises); 
	console.log(resArr);
})(); 

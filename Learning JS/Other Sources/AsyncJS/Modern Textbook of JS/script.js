'use strict';

// window.setTimeout(() => {
// 	console.log('log');
// }, 0);

const URL = 'https://jsonplaceholder.typicode.com/tdos/1';

const URL2 = 'https://jsonplaceholder.typicode.com/photos/1';
// (async () => {
// 	let response = await fetch(URL);
// 	if (response.ok) {
// 		if (response.ok) {
// 			console.log(await response.json());
// 		} else if (response.status === 500) {
// 			console.log('The server encountered an unexpected condition that prevented it from fulfilling the request');
// 		} else if (response.status === 404) {
// 			console.log('The server cannot find a resource at this URL');
// 		} else {
// 			console.log('HTTP status: ' + response.status);
// 		}
// 	}
// })();

// fetch(URL)
// 	.then(response => response)
// 	.catch(response => {
// 		if (response.status === 500) {
// 			console.log('The server encountered an unexpected condition that prevented it from fulfilling the request');
// 		} else if (response.status === 404) {
// 			console.log('The server cannot find a resource at this URL');
// 		} else {
// 			console.log('HTTP status: ' + response.status);
// 		}
// 	})
// 	.then(response => response.json())
// 	.then(json => {console.log(json)})
// let users = ['iliakan', 'remy', 'no.such.users'];
// getUsers(users);
// getUsers(['iliakan', 'remy', 'no.such.users', 'mojombo', 'defunkt', 'pjhyett', 'wycats']);


const setPromise = (value, time, isRejecter = false) => 
	new Promise((res, rej) => 
		setTimeout(() => {isRejecter ? rej(value) : res(value)}, time));

const init = async () => {
	let arrUsersInfo = await getUsers(['whats?', 'egor', 'alfeov', 'mojombo', 'no.such.name']);
	console.log(arrUsersInfo);
	for (let info of arrUsersInfo) {
		console.log(info);
	}
}

//!
// const getUsers = async (names = []) => {
// 	let arrUsersInfo = [];
// 	if (names.length) {
// 		names.forEach(async (name) => {
// 			let result = fetch(`https://api.github.com/users/${name}`)
// 				.then(response => {
// 					if (response.ok) {
// 						return response.json()
// 					} else {
// 						throw new Error();
// 					}
// 				})
// 				.then(json => {
// 					if (json.login === name) {
// 						return name;
// 					} else {
// 						return null;
// 					}
// 				}) 
// 				.catch(error => {
// 					console.log(error);
// 					return null;
// 				})
// 			arrUsersInfo.push(result);
// 		})
// 		arrUsersInfo = await Promise.all(arrUsersInfo)
// 	}
// 	return arrUsersInfo;
// }
// init();
//!
// const getUsers = async (names = []) => {
// 	let arrUsersInfo = [];

// 	arrUsersInfo = await Promise.all(names.map(async x => {
// 		let name = fetch(`https://api.github.com/users/${x}`)
// 			.then(response => {
// 				if (response.ok) {
// 					return response.json()
// 				} else {
// 					throw new Error();
// 				}
// 			})
// 			.then(json => {
// 				if (json.login === x) {
// 					return json.login;
// 				} else {
// 					return null;
// 				}
// 			}) 
// 			.catch(error => {
// 				console.log(error);
// 				return null;
// 			})
// 		return name;
// 	}))
// 	return arrUsersInfo;
// }
// init();
//!

const getUsers = (async (names = []) => {
	let arrUsersInfo = [];
	
	arrUsersInfo = await Promise.all(names.map(async x => {
		let name = fetch(`file.json`)
			.then(response => {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error();
				}
			})
			.then(json => {
				if (json.login === x) {
					return json.login;
				} else {
					return null;
				}
			}) 
			.catch(error => {
				console.log(error);
				return null;
			})
		return name;
	}))
	return arrUsersInfo;
})(['whats?', 'egor', 'alfeov', 'mojombo', 'no.such.name'])
	.then(response => {
		let res = response.filter(x => {if(x) {return x}})
		console.log(res);
	});


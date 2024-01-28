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
getUsers(['iliakan', 'remy', 'no.such.users', 'mojombo', 'defunkt', 'pjhyett', 'wycats']);

async function getUsers(names = []) {
	let users = [];
	if (names[0] !== undefined) {
		names.forEach(async (name) => {
			console.log(await sider(name));
		})
		
	}
	return users;
}

async function sider(name) {
	let response = await fetch(`https://api.github.com/users/${name}`)
		.then(response => response.json())
		.catch(error => {console.log(error)})
	console.log(response);
	// let json = await ; 
	// json.catch(error => {console.log(error)});
	// console.log(await json);
		// .then(response => {
		// 	if (!response.ok) {
		// 		throw new Error();
		// 	}
		// 	return response.json();
		// })
		// .then(json => {
			
		// })
		// .catch((error) => {
		// 	name = null;
		// })
	
}

// return new Promise((res, rej) => {
// 	if (name !== 'no.such.users') {
// 		res(name);
// 	} else {
// 		rej(null)
// 	}
// })

					// return new Promise((res, rej) => {
					// 	// if (response.ok) {
					// 	// 	res(response.json());
					// 	// } else {
					// 	// 	rej('new text');
					// 	// }
					// })


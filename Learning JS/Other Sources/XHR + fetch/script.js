'use strict';

let url = 'https://jsonplaceholder.typicode.com/users';

// console.log('Sending...');
// fetch(url, {
// 	method: 'POST',
// 	body: JSON.stringify({name: 'George', age: 19}),
// 	headers: {
// 		'Content-Type': 'application/json; charset=utf-8'
// 	}
// })
// 	.then(response => {
// 		if (response.ok) {
// 			console.log('Data has been sended');
// 		} else {
// 			return new Error('Something went wrong');
// 		}
// 	})
// 	.catch(console.log);


// fetch(url)
// 	.then(response => {
// 		if (response.ok) {
// 			// console.log(response.headers.get('Content-Type'))
// 			// for (let [key, value] of response.headers) {
// 			// 	console.log(`${key} = ${value}`);
// 			// }
// 			return response.json();
// 		}
// 		throw new Error('error to get');

// 	})
// 	.then(console.log)
// 	.catch(console.log)

//TODO consolidation 

// console.log('Sending...');

// fetch(url, {
// 	method: 'POST',
// 	body: JSON.stringify({data: 'some info...'}),
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// })
// 	.then(response => {
// 		// console.log(response.headers.get('Content-Type'));
// 		// for (let [key, values] of response.headers) {
// 		// 	console.log(`${key}: ${values}`);
// 		// }
// 		if (response.ok) {
// 			console.log('Data has been sended')
// 		}
// 		return new Error('HTTP Error:', response.status)
// 	})
// 	.catch(console.log);

//TODO

// let data = 'image';

// HTMLCanvasElement.toBlob.call(data, (blob) => {
// 	fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: blob,
// 	})
// 		.then(response => {
// 			if (response.ok) {
// 				console.log('Image data has been sended');
// 			} else {
// 				return new Error('Something went wrong');
// 			}
// 		})
// 		.catch(console.log);
// })

//? formData

let data = new FormData();

data.append('name', 'George');
data.append('email', 'alfeove@gmail.com');

data.set('new', 'old');
data.set('new', 'new');

data.append('append', 'old');
data.append('append', 'new');

// console.log(data.getAll('append'));

if (data.has('name')) {
	// console.log(data.getAll('name'));
}

for (let [key, value] of data.entries()) {
	// console.log(key + ':', value);
}

for (let keys of data.keys()) {
	// console.log(keys, data.get(keys));
}

for (let values of data.values()) {
	// console.log(values);
}

data.delete('append');
// console.log(data.get('append')); //! null
// console.log(data.get('no-such-key')); //! null 

//?

let form = document.querySelector('#form');
let formData = new FormData(form);

// for (let [key, value] of formData) {
// 	console.log(key, value);
// }

//TODO

let file = document.querySelector('input[type="file"]');
file.addEventListener('change', () => {
	const file = event.target.files[0];
	const data = new FormData();
	data.set('document', file);

	fetch(url, {
		method: 'POST',
		mode: 'no-cors',
		body: data,
	})
		.then(response => {
			if (response.ok) {
				console.log('File has been sended');
			} else {
				return new Error('Something went wrong');
			}
		})
		.catch(console.warn);
})

// let localData = localStorage.getItem('key');
// console.log(localData);

for (let i = 0; i < localStorage.length; i++) {
	const key = localStorage.key(i);
	console.log(key, localStorage.getItem(key));
}

for (let key in localStorage) {
	if (localStorage.hasOwnProperty(key)) {
		console.log(key, localStorage.getItem(key));
	}
}

// let objKeys = Object.keys(localStorage);
// let objKeys = Object.getOwnPropertyNames(localStorage);
let objKeys = Reflect.ownKeys(localStorage);
for (let key of objKeys) {

	console.log(key, localStorage.getItem(key))
}

// localStorage.setItem('json', JSON.stringify({key: 'value'}));

for (let key of objKeys) {
	if (key = 'json') {
		console.log(key, JSON.parse(localStorage.getItem(key)));
		continue;
	}
	console.log(key, localStorage.getItem(key))
}


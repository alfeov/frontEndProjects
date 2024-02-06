'use strict';

//TODO Exercise 1: Basic Promise

// Write a function that uses the fetch API to make an HTTP request to a JSON endpoint.
// Use a promise to handle the response and log the JSON data to the console.

//TODO Exercise 2: Promise Chaining

// Extend the previous exercise by chaining promises to handle the JSON response and extract specific data from the JSON object.

//TODO Exercise 3: Error Handling

// Modify the previous exercise to include error handling using the catch method to handle any errors that may occur during the fetch operation.

// // async function getData(url) {
// // 	fetch(url)
// // 		.then(response => {
// // 			if (response.ok) {
// // 				return response.json();
// // 			}
// // 			return new Error(`Status: ${response.status}`);
// // 		})
// // 		.then(console.log)
// // 		.catch(console.error)
// // }
// // let url = 'https://jsonplaceholder.typicode.com/comments';
// // getData(url);

//TODO Exercise 4: Async/Await

// Refactor the code from Exercise 1 to use the async and await keywords to achieve the same result.

//TODO Exercise 6: Error Handling with Async/Await

// Refactor the code from Exercise 3 to use async and await for error handling.

// // async function getData(url) {
// // 	try {
// // 		const response = await fetch(url);
// // 		if (response.ok) {
// // 			var data = await response.json();
// // 		} else {
// // 			throw new Error(`Status: ${response.status}`);
// // 		}
// // 		return data;
// // 	} catch (error) {
// // 		console.log(error);
// // 	}
// // }

// // (async function startFunctoin() {
// // 	let url = 'https://jsonplaceholder.typicode.com/comments';
// // 	let data = await getData(url);
// // 	console.log(data);
// // })();


//TODO Exercise 5: Parallel Promises

// Create two separate functions that make asynchronous requests to different JSON endpoints using the fetch API.
// Use Promise.all to wait for both requests to complete and then consolidate the results into a single JSON object.

const setPromise = (ms) => {
	return new Promise(res => 
		setTimeout(res, ms))};


let url1 = 'https://jsonplaceholder.typicode.com/comments';
let url2 = 'https://jsonplaceholder.typicode.com/users';

// // async function getComments(url) {
// // 	await setPromise(2000);
// // 	return await fetch(url)
// // 		.then(response => {
// // 			if (response.ok) {
// // 				return response.json();
// // 			}
// // 			return new Error(`Status: ${response.status}`);
// // 		})
// // }
// // async function getUsers(url) {
// // 	await setPromise(2000);
// // 	return await fetch(url)
// // 		.then(response => {
// // 			if (response.ok) {
// // 				return response.json();
// // 			}
// // 			return new Error(`Status: ${response.status}`);
// // 		})
// // }

// // Promise.all([getComments(url1), getUsers(url2)])
// // 	.then(console.log)
// // 	.catch(console.error);

// let urls = [url1, url2];
// async function getData() {
// 	let responses = urls.map(url => fetch(url));
// 	responses = await Promise.all(responses).catch(console.error)
	
// 	let newResp = responses.map(response => response.json());
// 	let data = await Promise.all(newResp).catch(console.error)
// 	console.log(data);
// }
// getData();

// async function getData() {
// 	let responses = urls.map(url => fetch(url));
// 	let data = await Promise.all(responses)
// 		.then(responses => 
// 			responses.map(response => response.json()))
// 		.catch(console.error)

// 	console.log(await Promise.all(data));
// }
// getData();



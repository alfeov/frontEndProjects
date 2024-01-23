'use strict';
// let script = 'I love JavaScript.';
// console.log(script.match(/avA|a/i));
// console.log(script.match(/[a-z\|A-Z]|./g));
// console.log(script.match(/./g));
// console.log(script.match(/\d/g)); //decimal
// console.log(script.match(/\s/g)); //' '
// console.log(script.match(/\blo/g)); //starts with...
// console.log(script.match(/(love|dislike)\s(Javascript|Python)/i));
// console.log(script.match(/(<sentense>[a-zA-Z]+\s)+/g));
// console.log(script.match(/([a-zA-Z0-9]+\s?)+(\.|\.\.\.|\?|\?\?\?|!|!!!)/g));
// let string = 'java'
// let regExp = new RegExp(string, 'i');
// console.log(script.match(regExp));

//TODO
// function showNames() {
// 	let i = 0;
// 	while (arguments[i+1]) {
// 		++i;
// 	}
// 	return arguments[i];
// }
// console.log(showNames("JavaScript", "Laurence", "Mike", "Larry"));

//TODO
// function typeTest(val) {
// 	try {
// 		if (isNaN(val)) {
// 			throw 'Not a number';
// 		} else {
// 			console.log('Got a number');
// 		}
// 		// val * 3;
// 		// throw RangeError();
		
// 	} catch(e) {
// 		console.log(e);
// 	} finally {
// 		console.log('Finally done');
// 	}
	
// }
// typeTest('d');

//? cookie

// let str = ' sting is cool';
// console.log(str);
// str = str.trim();
// console.log(str);

// str = str.substring(6);
// console.log(str);

//?

// function setCookie(input) {
// 	document.cookie = 'name=' + input.value + ';';
// }

// function sayHi(cookieKey) {
// 	let cookieValue = getCookie(cookieKey);
// 	console.log(`Hello ${cookieValue}`);
// }

// function getCookie(cookieKey) {
// 	let cookie = document.cookie;
// 	let cookieValue;
// 	cookie = cookie.split(';');
// 	console.log(cookie);
// 	for (let i = 0; i < cookie.length; i++) {
// 		let cook = cookie[i];
// 		if (cook.startsWith(' ')) {
// 			cook = cook.trim()
// 		}
// 		if (cook.startsWith('name=')) {
// 			cookieValue = cook.substring(5);
// 		}
// 	} 
// 	console.log(cookieValue);
// 	return cookieValue;
// }

// function createCookie(cName, cValue, days) {
// 	let cDate = getDate(days);
// 	console.log(cDate.toUTCString());
// 	document.cookie = '; ' + cName + '=' + cValue + '; expires=' + cDate.toUTCString() + '; path=/';
// } 
// function getDate(cDays) {
// 	let now = new Date();
// 	let date = new Date(now.setDate(now.getDate() + cDays));
// 	return date;
// }

// createCookie('name', '', );

// console.log(rCookie("name"));
// console.log(rCookie("test"));
// cCookie("test2", "new Cookie", 30);
// dCookie("test2");
// function cCookie(cName, value, days) {
// 	if (days) {
// 		const d = new Date();
// 		d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
// 		let e = "; expires=" + d.toUTCString();
// 		console.log(e);
// 		document.cookie = cName + "=" + value + e + "; path=/";
// 	}
// }

// function rCookie(cName) {
// 	let cookieValue = false;
// 	let arr = document.cookie.split("; ");
// 	arr.forEach(str => {
// 		const cookie = str.split("=");
// 		if (cookie[0] == cName) {
// 			cookieValue = cookie[1];
// 		}
// 	});
// 	return cookieValue;
// }

// function dCookie(cName) {
// 	cCookie(cName, "", -1);
// }
// let cookit = (document.cookie).split('; ');
// console.log(cookit);

function createCookie(cKey, cValue, days) {
	function getDate(cDays) {
		let now = new Date();
		let date = new Date(now.setDate(now.getDate() + cDays));
		return date.toUTCString();
	}
	let cDate = getDate(days);
	document.cookie = cKey + '=' + cValue + '; expires=' + cDate + '; path=/';
} 
function deleteCookie(cKey) {
	createCookie(cKey, '', -1);
}
function getCookie(cKey) {
	let cook = document.cookie.split('; ');
	let cValue;
	if (cook) {
		cook.forEach((cook) => {
			const keyValue = cook.split('=');
			if (keyValue[0] === cKey) {
				cValue = keyValue[1];
			}
		})
	}
	return cValue;
}

createCookie('test', 'testValue', 1);
createCookie('test2', 'testValue', 1);
// deleteCookie('test');
console.log(document.cookie);
console.log(getCookie('test'));

let date = Date.now();
console.log(date.toUTCString());

let date1 = Date();
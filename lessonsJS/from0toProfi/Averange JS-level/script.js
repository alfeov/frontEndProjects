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

//TODO

// function createCookie(cKey, cValue, days) {
// 	function getDate(cDays) {
// 		let now = new Date();
// 		let date = new Date(now.setDate(now.getDate() + cDays));
// 		return date.toUTCString();
// 	}
// 	let cDate = getDate(days);
// 	document.cookie = cKey + '=' + cValue + '; expires=' + cDate + '; path=/';
// } 
// function deleteCookie(cKey) {
// 	createCookie(cKey, '', -1);
// }
// function getCookie(cKey) {
// 	let cook = document.cookie.split('; ');
// 	let cValue;
// 	if (cook) {
// 		cook.forEach((cook) => {
// 			const keyValue = cook.split('=');
// 			if (keyValue[0] === cKey) {
// 				cValue = keyValue[1];
// 			}
// 		})
// 	}
// 	return cValue;
// }

// createCookie('test', 'testValue', 1);
// createCookie('test2', 'testValue', 1);
// // deleteCookie('test');
// console.log(document.cookie);
// console.log(getCookie('test'));

//?

// let symb = Symbol('key');
// console.log(symb === symb);

//?

// let value = 'value information';
// localStorage.setItem('keyIndex0', value);

// if (localStorage.getItem('keyIndex0')) {
// console.log(localStorage.getItem('keyIndex0'));
// }
// localStorage.removeItem('keyIndex0');

//?

// console.log(localStorage.key(0));
// console.log(localStorage.getItem(localStorage.key(0)));

// localStorage.clear();

//TODO

// let input = document.querySelector('input[name="input"]');
// let output = document.querySelector('.output');
// let tasks = JSON.parse(localStorage.getItem('tasklist')) || [];
// let dialog = document.querySelector(".dialog");
// input.nextElementSibling.addEventListener('click', addTask);

// document.body.addEventListener('click', () => {dialog.classList.remove('visible');});

// function deployTlist() {
// 	output.innerText = '';
// 	tasks.forEach((task) => {
// 		genItem(task.value, task.isChecked);
// 	})
// }
// deployTlist();

// function saveTask() {
// 	localStorage.setItem('tasklist', JSON.stringify(tasks));
// 	deployTlist();
// }
// function genItem(value, isChecked) {
// 	const li = document.createElement('li');
// 	const textN = document.createTextNode(value);
// 	li.append(textN);
// 	if (isChecked) {
// 		li.classList.add('ready');
// 	}
// 	li.addEventListener('click', () => {
// 		li.classList.toggle('ready');
// 		updateElement(event.target);
// 	});
// 	li.addEventListener('contextmenu', (e) => {
// 		e.preventDefault();
// 		dialog.classList.add('visible');
// 		dialog.style.left = e.x + 'px';
// 		dialog.style.top = e.y + 'px';
// 		deleteElement(li);
// 	});
// 	output.appendChild(li);
// }
// function deleteElement(el) {
// 	tasks.forEach((task) => {
// 		if (task.value === el.innerText) {
// 			tasks = tasks.filter(tsk => tsk!==task);
// 		}
// 	})
// 	saveTask();
// }
// function updateElement(el) {
// 	tasks.forEach((task) => {
// 		if (task.value === el.innerText) {
// 			if (el.classList.contains('ready')) {
// 				task.isChecked = true;
// 			} else {
// 				task.isChecked = false;
// 			}
// 		}
// 	})
// 	saveTask();
// }
// function addTask() {
// 	if (input.value) {
// 		const tempObj = {
// 			value: input.value,
// 			isChecked: false,
// 		}
// 		input.value = '';
// 		tasks.unshift(tempObj);
// 		saveTask();
// 		// genItem(tempObj.value);	
// 	}
// }

// console.log(localStorage);

//TODO

// let myLists = {
// 	'friends': [
// 		{
// 			'name': 'Anton',
// 			'address': 'Brest'
// 		}
// 	],
// 	'colegs': [
// 		{
// 			'name': 'Maskim',
// 			'address': 'Snitovo'
// 		}
// 	]
// };
// myLists = JSON.stringify(myLists);
// myLists = JSON.parse(myLists);

// console.log(myLists.friends[0]);

//TODO
// let mass = 'alf@gmail.com dsa@mail.ru.com alf@gmail.com';
// mass = String(mass);

// if (mass) {
// 	let emailTest = /[\w0-9_]+@[\w0-9_]+\.\w+/g;
// 	let test = mass.match(emailTest);
// 	let arr = [];
// 	test.forEach((each) => {
// 		let temp = each.substring(each.indexOf(each), each.length);
// 		if (arr.indexOf(temp) === -1) {
// 			arr.push(temp);
// 		}
// 	})
// 	mass = arr.join(' ');
// 	console.log(mass);
// }

//?

// const myForm = document.querySelector("form");
// const inputs = document.querySelectorAll("input");
// const errors = document.querySelectorAll(".error");
// const required = ["email", "userName", "password"];
// myForm.addEventListener("submit", validation);
// function validation(e) {
// 	let data = {};
// 	e.preventDefault();
// 	errors.forEach(function (item) {
// 		item.classList.add("hide");
// 	});
// 	let error = false;
// 	inputs.forEach(function (el) {
// 		let tempName = el.getAttribute("name");
// 		if (tempName != null) {
// 			el.style.borderColor = "#ddd";
// 			if (el.value.length == 0 && required.includes(tempName)) {
// 				addError(el, "Required Field", tempName);
// 				error = true;
// 			}
// 			if (tempName == "email") {
// 				let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
// 				if (!exp.test(el.value)) {
// 					addError(el, "Invalid Email", tempName);
// 					error = true;
// 				}
// 			}
// 			if (tempName == "password") {
// 				let exp = /[A-Za-z0-9]+$/;
// 				let result = exp.test(el.value);
// 				if (!result) {
// 					addError(el, "Only numbers and Letters", tempName);
// 					error = true;
// 				}
// 				if (el.value.length < 8) {
// 					addError(el, "Needs to be at least 8 characters", tempName);
// 					error = true;
// 				}
// 			}
// 			data[tempName] = el.value;
// 		}
// 	});
// 	if (!error) {
// 			myForm.submit();
// 	}
// }

// function addError(el, mes, fieldName) {
// 	let temp = el.nextElementSibling;
// 	temp.classList.remove("hide");
// 	temp.textContent = fieldName.toUpperCase() + " " + mes;
// 	el.style.borderColor = "red";
// 	el.focus();
// }
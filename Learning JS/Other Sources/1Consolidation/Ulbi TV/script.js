'use strict';

let obj = {
	name: 'obj',
	func() {
		console.log(this.name);
	}
};

// setTimeout(obj.func.bind(obj), 1000);

// for (let key in obj) {
// 	if (obj[key] instanceof Function) {
// 		obj[key] = obj[key].bind(obj);
// 	}
// }

_.bindAll(obj, 'func');

// setTimeout(obj.func, 1000);

//? Partial

// использование:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   },
// 	partial(func, ...argsBound) {
// 		return func.bind(this, ...argsBound);
// 	}
// };

// user.sayNow = user.partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow();
// Что-то вроде этого:
// [10:00] John: Hello!

//TODO

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//TODO

// function askPassword(ok, fail) {
  // let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); 

// ?

// console.log('Start');

// setTimeout(() => {
//   console.log('First setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('First Promise.resolve() microtask');
//   Promise.resolve().then(() => {
//     console.log('Second Promise.resolve() microtask');
//   });
// });

// Promise.resolve().then(() => {
//   console.log('Second Promise.resolve() microtask');
// });

// console.log('Immediate console.log');

// setTimeout(() => {
//   console.log('Second setTimeout');
// }, 0);

// console.log('End');

// Start, Immediate console.log, End, 
// First Promise.resolve() microtask, 
// Second Promise.resolve() microtask, 
// Second Promise.resolve() microtask, 
// First setTimeout, Second setTimeout.

// TODO

// 1, 4, promise 1, promise 2, setTimeout 1, 
// promise setTimeout, setTimeout 2

//?


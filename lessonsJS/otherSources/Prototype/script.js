'use strict';

// let friend = new Object({
// 	name: 'Anton',
// 	age: 19,
// 	greetings: function() {
// 		console.log(this.name, 'Hello');
// 	}
// });
// friend.greetings();
// console.log(friend.toString());

// Object.prototype.sayHello = function() {
// 	console.log('hello', this.name);
// }

// let bestFriend = Object.create(friend);
// bestFriend.name = 'Eugene';
// console.log(bestFriend);
// bestFriend.sayHello();

// let str = new String('Specific name1');
// str.sayHello(); //hello undefined

//TODO

// const Person = {
// 	name: 'specificName',
// 	age: 18,
// 	sayHello: function() {
// 		console.log('Hello, my name is', this.name, `i'm ${this.age} years old.`);
// 	}
// };
// let Person1 = Object.create(Person);
// Person1.name = 'Vika';
// Person1.age = 29;


// let Person2 = {name: 'Anton', age: 19, sayHello: 'hi'};
// Person2.__proto__ = Person;

// Person1.sayHello();
// console.log(Person2);
 
//TODO

// function hasProp(objToTest = {}, propToCheck = '') {
// 	let message;
// 	if (objToTest && typeof(objToTest) === 'object' && objToTest.hasOwnProperty(propToCheck)) {
// 		message = 'Yes';
// 	} else {
// 		message = 'Error';
// 	}
// 	console.log(message);
// }
// let testObj = {testProp: 'testVal'};
// hasProp(testObj, 'testProp');

// console.log(!!testObj);

//TODO

Function.prototype.defer = function(ms) {
	return (...args) => {
		setTimeout(() => {this.apply(null, args)}, ms);
	}
}

// function f() {
//   console.log("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2);
// (1, 2); // выведет 3 через 1 секунду.
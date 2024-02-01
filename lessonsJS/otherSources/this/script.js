'use strict';

// let person = {
// 	name: 'Anton',
// 	age: 19,
// 	job: 'Backend-Developer',
// 	funct: function (...arg) {
// 		let temp = [...arguments];
// 		console.log(arg);
// 		return arg;
// 	}
// }
// let person2 = {
// 	name: 'Nasty',
// 	age: 17,
// 	job: 'Military',
// }

// person.funct('hell no', 'no');


let res
// res = person.funct.apply(person2, ['hell no', 'no']);
// console.log(res);

// res = person.funct.bind(person2, 'hell no', 'no');
// console.log(res());

// res = person.funct.call(person2, 'hell no', 'no');
// console.log(res);

// Object.prototype.funct = person.funct;
// person2.funct('hello');

//?
// (function hello() {
// 	console.log(this);
// })()

// (function () {
// 	(function hello() {
// 		console.log(this);
// 	})()
// })()

function Item(name, parameters) {
	this.name = name;
	this.parameters = parameters;
}
// class Item {
// 	constructor(name, parameters) {
// 		this.name = name;
// 		this.parameters = parameters;
// 	}
// }
const item1 = new Item('mouse', 'color-black');
// console.log(item1);

//? arrow functions and this

// (function wrapper() {
// 	(() => {
// 		console.log(this);
// 	})();
// })();

// let fun = (() => {
// 	console.log(this);
// })();

// let obj = {
// 	defFun: function() {
// 		console.log(this);
// 	},
// 	arrowFun: (() => {
// 		console.log(this);
// 	})()
// }
// obj.defFun();

// let persons = {
// 	lastName: 'FIO',
// 	firstName: ['Name1', 'Name2'],

// 	}

// }
// persons.logFullName();
let persons = {
	lastName: 'FIO',
	firstName: ['Name1', 'Name2'],
	logFullNameArrow: function() {
		this.firstName.forEach(name => {
			console.log(this.lastName, name);
		});
	},
	logFullNameDef: function() {
		this.firstName.forEach(function(name) {
			console.log(this.lastName, name);
		}, this)
	},
	time1: function() {
		console.log(this);
		setTimeout(() => {console.log(this.lastName)}, 0);
	},
	time2: function() {
		console.log(this);
		setTimeout(function() {console.log(this)}, 0);
	},	
	time2Resolved: function() {
		console.log(this);
		setTimeout((function() {console.log(this)}).bind(this), 0);
	},
}
// persons.logFullNameArrow();
// persons.logFullNameDef();
// persons.time1();
// persons.time2();
// persons.time2Resolved();

//TODO

function Person(name, age) {
	this.name = name;
	this.age = age;
}
// Person.prototype.introduce = function() {
// 	console.log(`hello, my name is ${this.name}, my age is ${this.age}`);
// }
const person1 = new Person('Anton', 19);
const person2 = new Person('Nasty', 17);
// person1.introduce();
// person2.introduce();

// console.log(person1);

//TODO

// let calculator = {
// 	add: function() {
// 		const res = this.a + this.b;
// 		console.log(res);
// 		return res;
// 	},
// 	subtract: function() {
// 		const res = this.a - this.b;
// 		console.log(res);
// 		return res;
// 	},
// 	multiply: function() {
// 		const res = this.a * this.b;
// 		console.log(res);
// 		return res;
// 	},
// }
// function Numbers(a, b) {
// 	this.a = a;
// 	this.b = b;
// }
// let numbers1 = new Numbers(3, 4);
// console.log(numbers1);
// setTimeout(() => {calculator.add.call(numbers1)}, 0);
// setTimeout(calculator.subtract.bind(numbers1), 0);
// setTimeout(calculator.multiply.bind(numbers1), 0);

//TODO

// Функция, которую мы хотим каррировать
function add(a, b, c, d) {
  return a * b * c * d;
}

// Пример каррирования
function curry(fn) {
	let args = [];
	return function currySelf (...arg) {
		args.push(arg);
		if (args.length === fn.length) {
			return fn.apply(this, args);
		} else if (args.length > fn.length) {
			console.log(new Error('To mach args'));
		} else {
			return currySelf;
		}
	}
}

// Применяем каррирование к функции add
let curriedAdd = curry(add);

// Создаем частично примененные функции
let addWith2 = curriedAdd(2);
let addWith2And3 = addWith2(3);
let addWith2And3And4 = addWith2And3(4);

// Вызываем частично примененные функции
// console.log(addWith2And3And4(5));

//! let t = (tag, ...classes) => text => `<${tag} class="${classes.join(' ')}">${text}<${tag}>`;

//?

person1.hi = function() {
	console.log('Hello', this.name);
}

person2.hi = person1.hi.bind(person2);

// bind(null, ...args)
function a() {
	console.log(this);
}
// window.a();

//? 

function bar() {
  console.log(Object.prototype.toString.call(this));
  console.log(this);
	console.log(typeof(this));
}

// bar.call(7);
// bar.call("foo");

//?

const obj = {
	name: 'Anton',
  getThisGetter() {
    const getter = () => console.log(this);
    return getter;
  },
};

let getter = obj.getThisGetter();
getter(); //obj

const fn2 = obj.getThisGetter;
// console.log(fn2()() === globalThis); // true в нестрогом режиме
// console.log(fn2()()); //undefined в строгом режиме

//?obj

function C1() {
  this.a = 37;
  return { a: 38 };
}
function C2() {
  this.a = 37;
	return { b: 38 };
}

var o = new C1();
console.log(o.a); // logs 38
var o = new C2();
console.log(o.a, o.b); // logs (undefined 38)

// target && currentTarget
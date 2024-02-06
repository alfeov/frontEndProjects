'use strict';

//? Prototypes

// const Animal = function(name) {
// 	this.name = name;
// }
// let animal = new Animal('Grizlik');
// console.log(animal);
// Animal.prototype.func = function() {
// 	console.log('Hello, I\'m', this.name);
// }
// animal.func();

// const Cat = function(...name) {
// 	Animal.apply(this, name);
// 	// this.__proto__.func = Animal.prototype.func;
// }
// Cat.prototype = Object.create(Animal.prototype);
// // Cat.prototype = Animal.prototype;
// // Cat.prototype.constructor = Cat;
// let cat = new Cat('Puxlik', 'and other');
// console.log(cat);

// Cat.prototype.func = function() {
// 	Animal.prototype.func.apply(this);
// 	console.log('I\'m', this.name, 'and I\'m cat!');
// }

// cat.func();

//? Classes

class Animal {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log('Hello, I\'m', this.name);
	}
}

let animal = new Animal('Grizlik');
animal.sayHi();
console.dir(animal);

class Cat extends Animal {
	constructor(name) {
		super(name);
	}

	sayHi() {
		super.sayHi();
		console.log('I\'m cat!');
	}
}

let cat = new Cat('Puxlik', 'and other');
cat.sayHi();
console.dir(cat);

Animal.prototype.func = function() {
	console.log('Hello');
}

Object.prototype.print = function() {
	console.log(this);
}
cat.print();


// let arr = [1, 2, 3, 4];
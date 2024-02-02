'use strict';

class ModernMachine {
	static type = 'MACHINE';
	constructor(options) {
		this.developmentYear = options.developmentYear
		this.constructYear = options.constructYear
		this.constructorName = options.constructorName
	}

	presentation() {
		console.log('I am a Modern Machine!!! People will surrender!!!')
	}
}

class Car extends ModernMachine {
	static type = 'CAR';
	constructor(options) {
		super(options);
		this.mark = options.mark;
	}

	presentation() {
		super.presentation();
		console.log('But i\'m only car... I cat\'t do somethind(((')
	}

	get getHello() {
		return 'hello';
	}
	set setMark(newMark) {
		this.mark = newMark;
	}
}

let car1 = new Car({
	developmentYear: 2015,
	constructYear: 2018,
	constructorName: 'George G.G.',
	mark: 'Mark II',
})

//?

// let animal = {
//   sayHi() {
//     console.log("Я животное");
//   }
// };

// // rabbit наследует от animal
// let rabbit = {
//   __proto__: animal,
//   sayHi() {
//     super.sayHi();
//   }
// };

// let plant = {
//   sayHi() {
//     alert("Я растение");
//   }
// };

// // tree наследует от plant
// let tree = {
//   __proto__: plant,
//   sayHi: rabbit.sayHi // (*)
// };

// tree.sayHi();  // Я животное (?!?)

//?

// let animal = {
//   eat: function() { // намеренно пишем так, а не eat() { ...
//     // ...
//   }
// };

// let rabbit = {
//   __proto__: animal,
//   eat() {(() => {super.eat()})()},
// };

// rabbit.eat();  // Ошибка вызова super (потому что нет [[HomeObject]])

//TODO

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
		super(name);
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit);

//TODO

// function work(a, b) {
//   console.log( a + b ); // произвольная функция или метод
// }
// function spy(original) {
// 	const wrapper = function(...args) {
// 		wrapper.calls.push(args);
// 		return original.apply(null, args);
// 	};
// 	wrapper.calls = []
// 	return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//   console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

function f(x) {
  console.log(x);
}
function delay(callback, time) {
	return function(...args) {
		setTimeout(() => {callback.apply(null, args)}, time)
	}
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

// f1000("test1"); // показывает "test" после 1000 мс
// f1500("test2"); // показывает "test" после 1500 мс

//TODO
let tempId;
function sum(a) {
	function logger() {
		console.log(this.currentSum);
	}
  function f(b) {
    f.currentSum += b;
    return f;
  }
	f.currentSum = a;
	f.logger = logger;
  return f;
}

sum(1)(2).logger();
sum(5)(-1)(2).logger();
sum(6)(-1)(-2)(-3).logger();
sum(0)(1)(2)(3)(4)(5).logger();
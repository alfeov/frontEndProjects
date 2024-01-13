'use strict';

//? Class creatuse

// class Car {
// 	constructor(mark, model, color = 'black', speed) {
// 		this.mark = mark;
// 		this.model = model;
// 		this.color = color;
// 		this.speed = speed;
// 	}
// }

// let car1 = new Car('Bugatti', 'Veiron', 'black-orange', 400);

// console.log(car1.mark, car1.speed);
// let car2 = new Car('Aston-Martin', 'Valhalla');
// console.log(`Color of ${car2.mark + ' ' + car2.model} is`, car2.color);

//? Constructor and class Methods
//? Propertys

class Person {
	#age;
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = firstName + ' ' + lastName;
		if (!(age < 18)) {
			this.#age = age;
		}
	}

// 	greetings(keyWord = 'Hello') {
// 		console.log(keyWord, this.fullName);
// 	}

	get age() {
		return this.#age;
	}
// 	set age(param) {
// 		if (!(param < 18)) {
// 			this.#age = param;
// 		}
// 	}
	
}

let person1 = new Person('Nastasy', 'Andreyuk', 18);
let person2 = new Person('Anton', 'Ilchevsky', 19);
let person3 = new Person('Eugene', 'Dyluk', 19);

// console.log('Hello', person1.firstName, 'and', person2.firstName + '!');

// person1.greetings('Greetings!!!');
// // person2.greetings();

// // console.log('Fullname is:', person1.fullName);

// console.log(person3);

//? getters and setters

// //get
// console.log(person3.age);
// //person3.age = 14; //!doesnot work

// //set
// person3.age = 21;
// console.log(person3.age);

//? inheretance

// class Kin extends Person {
// 	constructor(firstName, lastName, age, relationDegree) {
// 		super(firstName, lastName, age);
// 		delete this.fullName;
// 		this.age = age;
// 		this.relationDegree = relationDegree;
// 	}
// }

// let person4 = new Kin('Anna', 'Kovaleva', 6, 1);
// console.log(person4);

// for (let key in person4) {
// 	console.log(person4[key]);
// }

//? prototypes

// Kin.prototype.func = function () {
// 	console.log('Hello', this.firstName + '!');
// };
// person4.func();

// Kin.prototype.test = 'test';
// console.log(person4.test);

//TODO projects 

// Person.prototype.important;
// person1.important = true;
// person2.important = true;
// person3.important = true;
// let person4 = new Person('Yarik', 'Zuravlev', 19, false);

// let arr = [person1, person2, person3, person4];
// let summ = 0;

// arr.forEach((person) => {
// 	if (person.important === true) {
// 		summ += person.age;
// 	}
// })

// console.log(summ);


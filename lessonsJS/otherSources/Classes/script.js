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

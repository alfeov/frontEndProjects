'use strict';

const person = Object.create(
	{
		ageFunc: function (year, month, day) {
			if (arguments.length > 0) {
				const ms = new Date() - new Date(year, month - 1, day);
				const years = ms / 1000 / 60 / 60 / 24 / 365;
				return Math.floor(years)
			}
		}
	}, 
	{
		name: {
			value: 'George',
			enumerable: true,
			writable: true,
			configurable: true,
		},
		birthYear: {
			value: 2004,
			writable: true,
		}, 
		birthMonth: {
			value: 5,
			writable: true,
		},
		birthDay: {
			value: 4,
			writable: true,
		},
		age: {
			get() {
				return ageFunc(person.birthYear, person.birthMonth, person.birthDay);
			},
			set(year) {
				if (year >= 1900) {
					person.birthYear = year;
				}
			}
		}
	}
)

for (let key in person) {
	if (person.hasOwnProperty(key)) {
		// console.log(key, person[key]);
	}
}
// console.log(person);

const person2  = Object.create(person, 
	{
		name: {value: 'George'},
		birthYear: {value: 2004},
	},
)

// delete person2.name //! false
// console.log(person2);

'use strict';

const numbers = [1, 3, 5];
const arrOfObj = [
	{
		id: 1,
		value: 'Some value',
	},
	{
		id: 2,
		value: 'Some value',
	},
	{
		id: 3,
		value: 'Some value',
	},
	{
		id: 4,
		value: 'Some value',
	},
	{
		id: 5,
		value: 'Some value',
	},
]

// console.log(numbers.indexOf(3, 1));
// console.log(numbers.includes(3, 1));
// console.log(arrOfObj.find(obj => obj.id === 2));
// console.log(arrOfObj.findIndex(obj => obj.id === 2));

// numbers.forEach((val, i, arr) => arr[i] = val ** val);
// console.log(numbers);
// const newNumbers = numbers.map(val => val ** val);
// console.log(newNumbers);

// const newArrOfObj = arrOfObj.map((val) => ({id: val.id - 1, value: `${val.value} of ${val.id}`}));
// console.log(newArrOfObj);
// console.log(arrOfObj);

const result = arrOfObj.filter(el => el.id > 4);
console.log(result);
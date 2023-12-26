"use strict"
// function integ() {};
// let integrall;

// if (2>1) {
// 	function integ(a) {
// 		if (a == 0) return 1;
// 		return a * integ(a-1);
// 	}
// 	integrall = function (a) {
// 		if (a == 0) return 1;
// 		return a * integrall(a-1);
// 	};	
// }


// console.log(integ(4));
// console.log(integrall(3));

let integrall = (param) => {
	if (param === 0) return 1;
	return param * integrall(param - 1);
};

let showMessege = (someText) => {
	console.log(someText);
}

let a = 1;

function timeFunc() {
	showMessege(integrall(a));
	let timeMachine = setTimeout(timeFunc, 2000, a++);
	if (a > 5) {
		clearTimeout(timeMachine);
	}
}
console.log(a);
setTimeout(timeFunc, 2000, a);
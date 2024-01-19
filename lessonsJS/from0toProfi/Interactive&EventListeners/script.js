'use strict';

// let argument = 'test';
// window.addEventListener('load', function () {
// 	test(this);
// 	test(argument);
// });

// function test(arg) {
// 	console.log(arg);
// }

//?test onload style remove
function loadStyleRemove() {
	document.body.classList.remove('load');
}
window.addEventListener('load', loadStyleRemove);

// window.onload = (e) => {
// 	message("Window ready", e);
// }
// document.addEventListener("DOMContentLoaded", (e) => {
// 	message("Document ready", e);
// });
// function message(val, event) {
// 	console.log(event);
// 	console.log(val);
// }

// let square = document.getElementById('id');

// square.addEventListener('click', (e) => {
// 	backgroundColor(e.target, 'blue');
// 	console.log(e.target);
// });
// square.addEventListener('mousemove', function () {
// 	backgroundColor(this, 'yellow');
// });
// square.addEventListener('mouseout', eventTargetTest);
// square.addEventListener('mousedown', function () {
// 	backgroundColor(this, 'yellow');
// });
// square.addEventListener('mouseup', function () {
// 	backgroundColor(this, 'red');
// });
// square.addEventListener('dblclick', function (e) {
// 	backgroundColor(this, 'black');
// 	console.log(e);
// });

// function eventTargetTest() {
// 	// backgroundColor(this, 'red');
// 	// console.log(event.target.children[0]);
// }

// function backgroundColor(item, color) {
// 	item.style.backgroundColor = color;
// }


//TODO

// let container = document.querySelector('.container');
// let boxs = document.querySelectorAll('.box');

// container.addEventListener('click', (e) => {
// 	console.log(4);
// });
// container.addEventListener('click', (e) => {
// 	console.log(1);
// }, true);

// boxs.forEach((e) => {
// 	e.addEventListener('click', (e) => {
// 		console.log(3);
// 		console.log(e.target.textContent);
// 	});	
// 	e.addEventListener('click', (e) => {
// 		console.log(2);
// 		console.log(e.target.textContent);
// 	},true);
// })

//TODO

// let output = document.querySelector('.output1');
let input1 = document.querySelector('input[name="first"]');
// let input2 = document.querySelector('input[name="last"]');
// console.log(input2);
// let arr = [input1, input2]
// for (let i = 0; i < arr.length; i++) {
// 	arr[i].addEventListener('change', (e) => {
// 		outputContentUpdater(e.target.value, i);
// 	})
// }


// function outputContentUpdater(text, index) {
// 	output.style.display = 'block';
// 	output.children[index].textContent = ' ' + text;
// }

//? keydown

// input1.addEventListener('keypress', function () {return numCheck()});
// function numCheck() {
// 	console.log('Number', + !isNaN(event.key));
// 	// console.log('Number', + (+event.key === 2));
// 	return !isNaN(event.key);
// }

//TODO

// const dragme = document.querySelector('#dragme');

// dragme.addEventListener('dragstart', (e) => {
// 	e.target.style.opacity = 0.5;
// })
// dragme.addEventListener('dragend', (e) => {
// 	e.target.style.opacity = 1;
// })

// document.querySelectorAll('.box').forEach((each) => {
// 	each.addEventListener('dragenter', () => {
// 		event.target.classList.add('red');
// 	});	
// 	each.addEventListener('dragleave', () => {
// 		event.target.classList.remove('red');
// 	});	
// 	each.addEventListener('dragover', () => {
// 		event.preventDefault();
// 	});
// 	each.addEventListener('drop', () => {
// 		event.preventDefault();
// 		event.target.appendChild(dragme);
// 	});
// });
// let output;
// function valForm() {
// 	let inputs = event.target.children;
// 	let error = false;
// 	output = document.getElementById('output');
// 	output.innerHTML = '';

// 	if (checker(inputs.firstName)) {
// 		error = true;
// 		message('Enter first name!');
// 	}		
// 	if (checker(inputs.lastName)) {
// 		error = true;
// 		message('Enter last name!');
// 	}	
// 	if (checker(inputs.age)) {
// 		error = true;
// 		message('Enter age!');
// 	}		
// 	if (!checker(inputs.age) && inputs.age.value < 19) {
// 		error = true;
// 		message('Age isn\'t correct!');
// 	}	

// 	if (error) {
// 		event.preventDefault();
// 	}
// 	// // var p = event.target.childNodes;
// 	// // console.log(p);

// 	// // p.forEach(e => console.log(e));
// }
// const checker = function(input) {
// 	if (input.value.length !== 0) {
// 		return false;
// 	}
// 	return true;
// }
// const message = function(msg) {
// 	console.log(msg);
// 	output.innerHTML += msg;
// }

//TODO

// const main = document.querySelector("#block");
// let mover = { speed: 10, dir: 1, posX: 0 , posY: 0};
// main.addEventListener("click", moveBlock);
// main.removeEventListener("click", moveBlock);

// main.addEventListener("click", () => {
// 	let y = 30;
// 	setInterval(() => {
// 		if (y < 1) {
// 			clearInterval();
// 		} else {
// 			moveBlock();
// 			y--;
// 		}
// 	}, 62)
// });

// function moveBlock() {
// 	let x = 30;
// 	let rand = Math.floor(Math.random() * 2);
// 	console.log(rand);
// 	setInterval(function () {
// 		if (x < 1) {
// 			clearInterval();
// 		} else {
// 			if (rand === 0) {
// 				translateX();
// 			} else if (rand === 1) {
// 				translateY();
// 			}
// 		}
// 	}, 2);

// 	function translateX() {
// 		if (mover.posX > window.innerWidth - 100) {
// 			mover.posX = window.innerWidth - 100;
// 			mover.dir *= -1;
// 		} else if (mover.posX < 0) {
// 			mover.posX = 0;
// 			mover.dir *= -1;
// 		}
// 		x--;
// 		mover.posX += x * mover.dir;
// 		main.style.transform = `translateX(${mover.posX}px) translateY(${mover.posY}px)`;
// 	}
	
// 	function translateY() {
// 		if (mover.posY > window.innerHeight - 100) {
// 			mover.posY = window.innerHeight - 100;
// 			mover.dir *= -1;
// 		} else if (mover.posY < 0) {
// 			mover.posY = 0;
// 			mover.dir *= -1;
// 		}
// 		x--;
// 		mover.posY += x * mover.dir;
// 		main.style.transform = `translateX(${mover.posX}px) translateY(${mover.posY}px)`;
// 		console.log(mover.posX, mover.posY)
// 	}
// }

//TODO

let boxs = document.querySelectorAll('.box');
let color = 30;
for (let i = 0; i< boxs.length; i++) {
	boxs[i].style.backgroundColor = 	`rgb(${color}, ${color}, ${color})`
	color += 30;
}

let section = document.querySelector('#section');
const history = [];

section.addEventListener('click', tracker);

function tracker() {
	if (event.target.classList.value) {
		const tempObj = {}; //! Mutation
		tempObj.textContent = event.target.textContent;
		tempObj.id = event.target.id;
		tempObj.tagName = event.target.tagName;
		tempObj.className = event.target.classList.value;
		history.push(tempObj);
		for (let key of history) {
			console.log(key);
		}
	}
}
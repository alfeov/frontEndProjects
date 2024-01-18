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

const dragme = document.querySelector('#dragme');

dragme.addEventListener('dragstart', (e) => {
	e.target.style.opacity = 0.5;
})
dragme.addEventListener('dragend', (e) => {
	e.target.style.opacity = 1;
})
document.querySelectorAll('.box').forEach((each) => {
	each.addEventListener('dragenter', () => {
		event.target.classList.add('red');
	});	
	each.addEventListener('dragleave', () => {
		event.target.classList.remove('red');
	});	
	each.addEventListener('dragover', () => {
		event.preventDefault();
	});
	each.addEventListener('drop', () => {
		event.preventDefault();
		event.target.appendChild(dragme);
	});
});

'use strict';

let list = document.querySelector('#list');

const onDragStart = function(el) {
	event.dataTransfer.effectAllowed = "copyMove";
	setTimeout(() => el.classList.add("dragging"), 0);
}

const onDragEnd = function(el) {
	el.classList.remove("dragging");
}

const onDragOver = function() {
	event.preventDefault();
	const draggingItem = document.querySelector(".draggable-checkbox.dragging");
	// Getting all items except currently dragging and making array of them
	let siblings = [...list.querySelectorAll(".draggable-checkbox:not(.dragging)")];
	// Finding the sibling after which the dragging item should be placed
	let nextSibling = siblings.find(sibling => {
			return event.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
	});
	// Inserting the dragging item before the found sibling
	list.insertBefore(draggingItem, nextSibling);
	//? return false;
}

const onDragEnter = function() {
	event.preventDefault(); //?
	return false;
}


const render = function(dataArr) {
	list.innerHTML = '';
	dataArr.forEach((data) => {
		let checked = '';
		if (data.isChecked) {
			checked = 'checked';
		}
		list.innerHTML += 
		`
		<li class="draggable-checkbox" draggable="true" data-index="${data.index}" ondragstart="onDragStart(this)" ondragend="onDragEnd(this)" ondragenter="onDragEnter()" ondragover="onDragOver()">
			<input type="checkbox" id="checkbox-${data.index}" class="checkbox" ${checked}>
			<label for="checkbox-${data.index}">${data.text}</label>
		</li>
		`
	})
}

let obj1 = {
	index: 1,
	text: 'String 1',
	isChecked: false,
}
let obj2 = {
	index: 2,
	text: 'String 2',
	isChecked: false,
}
let obj3 = {
	index: 3,
	text: 'String 3',
	isChecked: false,
}
let obj = {
	data: [
		obj1,
		obj2,
		obj3
	]
}

function init() {
	render(obj.data);
}
init();
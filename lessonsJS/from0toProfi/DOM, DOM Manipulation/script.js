'use strict';
// console.dir(window);
// console.dir(history);
// console.dir(navigator);
// console.dir(location);
// // location.pathname = encodeURIComponent('/Build-in Methods/main.html');
// // document.body.textContent = 'Hello World!';
// console.log(document.body);

// for (let key in window) {
// 	console.log(key + ': ' + window[key]);
// }

// console.dir(document.body.childNodes[1].childNodes[1].childNodes[1].children[0].innerText);

//?
// let divs = document.querySelectorAll('div');
// console.log(divs);

// function func() {
// 	divs.forEach((e) => {
// 		e.style.backgroundColor = e.id;
// 	})
// 	let sections = document.querySelectorAll('section');
// 	sections.forEach((e) => {
// 		e.classList.toggle('border');
// 	})
// }

// let button = document.getElementById('button');
// button.addEventListener('click', func);
// // button.onclick = func();

// console.log(document.querySelector('.test').innerHTML);
//?

const message = document.querySelector("#message");
const myArray = ["Laurence", "Mike", "John", "Larry", "Kim", "Joanne", "Lisa", "Janet", "Jane"];
const output = document.getElementById("output");
let indexx;
build();
//addClicks();
function build() {
		let html = "<h1>My Friends Table</h1><table id='table'>";
		myArray.forEach((item, index) => {
			indexx = index;
				html +=
						`<tr class="box" data-row="${index+1}" data-name="${item}" onclick="getData(this)"><td>${item}</td>`;
				html += `<td >${index + 1}</td></tr>`;
		});
		html += "</table>";
		output.innerHTML = html;
}

function getData(el) {
		let temp = el.getAttribute("data-row");
		let tempName = el.getAttribute("data-name");
		message.innerHTML = `${tempName } is in row #${temp}`;
}

let table = document.getElementById('table');
function pushFriend(friend) {
	if (friend !== '') {
		let tr = document.createElement('tr');
		let td1 = document.createElement('td'), td2 = document.createElement('td');
		
		++indexx;
		td1.textContent = friend;
		td2.textContent = indexx + 1;

		tr.setAttribute("data-row", indexx + 1);
		tr.setAttribute("data-name", friend);
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	}
	document.getElementById('input').value = '';
}

// function pushFriend(friend) {
// 	if (friend !== '') {
// 		console.log(friend);
// 		++indexx;
// 		output.innerHTML = output.innerHTML.slice(0, output.innerHTML.lastIndexOf('</table>')) +
// 		`<tr class="box" data-row="${indexx+1}" data-name="${friend}" onclick="getData(this)"><td>${friend}</td>` +
// 		`<td>${indexx + 1}</td></tr></table>`;
// 	}
// 	document.getElementById('input').value='';
// }

// let cells = document.querySelectorAll('.box');
// cells.forEach((each) => {
// 	function logger() {
// 		console.log(this);
// 	}
// 	each.addEventListener('click', logger);
// })

let input = document.querySelector('.input');
let output = document.querySelector('.wrapper_output');
let inputValue;
let counter;

let lifes = document.querySelectorAll('.life');
let hearts;

function lifesStyle() {
	let color = 30;
	for (let i = 0; i < lifes.length; i++) {
		lifes[i].style.backgroundColor = `rgb(${color}, ${color}, ${color})`
		color += 20;
	}
}
lifesStyle();

input.addEventListener('keypress', () => {
		if (event.key === 'Enter') 
			startGame();
})

const startGame = () => {
	if (input.value !== '') {
		counter = 0;
		hearts = 6;
		output.nextElementSibling.style.display = 'none';
		inputValue = input.value.toUpperCase().split('');
		input.value = '';
		outputAdd(inputValue.length);
	}
} 

const outputAdd = function(length) {
	let temp = '';
	for (let i = 0; i < length; i++) {
		temp += `<input type="text" class="char" maxlength="1" data-index="${i}">`;
	}
	output.innerHTML = temp;
	inputErrorStyleTrigger();
}

const inputErrorStyleTrigger = function () {
	let charset = document.querySelectorAll('.char');
	charset.forEach((char) => {
		const removeError = function() {
			this.classList.remove('outline_error');
		}
		char.addEventListener('focus', removeError);
		char.addEventListener('change', check);
	})
}

function check() {
	if (this.value.toUpperCase() === inputValue[this.dataset.index]) {
		++counter;
		this.classList.add('outline_correct');
		this.disabled = true;
	} else {
		--hearts;
		lifes[hearts].style.opacity = 0;
		if (hearts === 0) {
			output.nextElementSibling.innerText = 'GameOver!'
			output.nextElementSibling.style.display = 'block';
			document.querySelectorAll('.char').forEach((char) => {
				char.disabled = true;
				char.style.color = 'black';
			});
			console.log('gemeover');
		}
		this.classList.add('outline_error');
	}
	if (counter === inputValue.length) {
		output.nextElementSibling.innerText = 'Congratulations BRO!'
		output.nextElementSibling.style.display = 'block';
		console.log('win');
	}
}


// const outer = (even = 3) => {
// 	if (even) {
// 		var test = even;
// 		inner1();
// 	}
// };
// setTimeout(outer, 0);
// const inner1 = function() {
// 	inner2();
// }
// const inner2 = function() {
// 	console.log(test);
// }

//addEventListener () => {this > window} 
//addEventListener function func() {this > thiselement}
//addEventListener function () {this > thiselement}
//addEventListener test = function () {this > thiselement}

// input.addEventListener('focus', function () {
// 	const inputValue = this.value;
// 	console.log(inputValue);
// })


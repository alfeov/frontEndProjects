//screens
let startScreen = document.querySelector('.start_screen');
let gameScreen = document.querySelector('.game_screen');
//input / output
let input = document.querySelector('.input');
let output = document.querySelector('.wrapper_output');
//interaction
let lifeContainer = document.querySelector('.lifes');
let restartButton = document.querySelector('.restart_button');
let lifes = document.querySelectorAll('.life');
//global const
let inputValue;
let counter;
let heartRate;

(function lifesStyle() {
	let color = 10;
	for (let i = 0; i < lifes.length; i++) {
		lifes[i].style.backgroundColor = `rgb(${color}, ${color}, ${color})`
		color += 8;
	}
})();

input.addEventListener('keypress', () => {
		if (event.key === 'Enter') 
			startGame();
})

function startGame() {
	if (input.value !== '' && input.value.length > 2) {
		counter = 0;
		heartRate = 6;
		lifes.forEach((life) => {
			life.classList.remove('swap');
		});
		output.classList.remove('correct');
		restartButton.classList.remove('swap');
		lifeContainer.classList.remove('swap');
		inputValue = input.value.toUpperCase().split('');
		input.value = '';
		outputAdd(inputValue.length);
		startScreen.classList.add('display_none', 'not_active');
		gameScreen.classList.remove('display_none');
		afterAll('gameScreen.classList.remove(\'not_active\')');
	}
} 

function outputAdd(length) {
	let temp = '';
	for (let i = 0; i < length; i++) {
		temp += `<input id="input${i}" type="text" class="char" maxlength="1" data-index="${i}">`;
	}
	output.innerHTML = temp;
	inputListeners();
	openRandom();
	//firstFocus
	for (let i = 0; i < charset.length; i++) {
		if (charset[i].disabled === false) {
			afterAll('charset[i].focus()', i);
			break;
		}
	}
}
function inputListeners() {
	let charset = document.querySelectorAll('.char');
	window.charset = charset;
	charset.forEach((char) => {
		function removeError() {
			this.classList.remove('outline_error');
		}
		char.addEventListener('focus', removeError);
		char.addEventListener('keypress', nextChar);
		char.addEventListener('change', check);
	})
}
function openRandom() {
	let tempArr = [];
	let tempIndex;
	let stop = 2;
	possibleLength = Math.floor(inputValue.length * 0.4);
	if (possibleLength > stop) {
		stop = possibleLength;
	}
	for (let i = 0; i < stop; i++) {
		(function rand() {
			tempIndex = Math.floor(Math.random() * inputValue.length);
			if (tempArr.indexOf(tempIndex) !== -1) {
				rand();
			}
		})();
		tempArr.push(tempIndex);
	}
	tempArr.forEach((index) => {
		charset.forEach((char) => {
			if (+char.dataset.index === index) { //char.dataset return string
				char.value = inputValue[index];
				correct(char);
			}
		})
	})
}
function check() {
	if (this.value.toUpperCase() === inputValue[+this.dataset.index]) {
		correct(this);
	} else {
		notCorrect(this);
	}
	if (counter === inputValue.length) {  
		easyGame();
	}
}
function correct(char) {
	++counter;
	char.classList.add('outline_correct');
	char.disabled = true;
}
function notCorrect(char) {
	--heartRate;
	lifes[heartRate].classList.add('swap');
	if (heartRate === 0) {
		gameOver();
	}
	char.classList.add('outline_error');
}
function gameOver() {
	restartButton.classList.add('swap');
	charset.forEach((char) => {
		char.disabled = true;
	});
	console.log('gemeover');
}
function easyGame() {
	restartButton.classList.add('swap');
	lifeContainer.classList.add('swap');
	output.classList.add('correct');
	console.log('win');
}
function nextChar() {
	if (event.key === 'Enter') {
		let trigger;
		for (let i = event.target.dataset.index; i < charset.length; i++) {
			if (i > +event.target.dataset.index  && charset[i].disabled === false) {
				charset[i].focus();
				trigger = 1;
				break;
			}
		}
		if (trigger !== 1) {
			for (let i = 0; i < event.target.dataset.index; i++) {
				if (charset[i].disabled === false) {
					charset[i].focus();
					break;
				}
			}
		} 
	}
}
function restartGame() {
	gameScreen.classList.add('display_none', 'not_active');
	startScreen.classList.remove('display_none');
	afterAll('startScreen.classList.remove(\'not_active\')')
}


function afterAll(execute, i) {
	setTimeout(() => {
		eval(execute); //yes it's dangerous, but it only test
	}, 0);
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


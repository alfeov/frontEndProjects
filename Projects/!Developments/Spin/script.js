'use strict';

window.addEventListener('load', () => {
	let spinEl = document.querySelector('#sync');
	spinEl.addEventListener('mouseup', onclick);
	let isFirstClick = true;

	function onclick() {
		// if (isFirstClick) {
		// 	isFirstClick = false;
		// 	spinEl.style.animationPlayState = 'running';
		// } else {
		// 	isFirstClick = true;
		// 	spinEl.style.animationPlayState = 'paused';
		// }

		spinEl.style.animationPlayState = 'running';
		let id = setInterval(() => {
			spinEl.style.animationPlayState = 'running';
			setTimeout(() => {
				spinEl.style.animationPlayState = 'paused';
			}, 990);
		}, 1000);

		//fetch > clearInterval

		setTimeout(() => {
			console.log('stop');
			clearInterval(id);
		}, 2990);

	}

	// (function spin() {

	// 	spinEl.style.animationPlayState = 'running';
	// 	let id = setInterval(() => {
	// 		spinEl.style.animationPlayState = 'running';
	// 		setTimeout(() => {
	// 			spinEl.style.animationPlayState = 'paused';
	// 		}, 1000);
	// 	}, 1000);

	// 	//fetch > clearInterval

	// 	setTimeout(() => {
	// 		console.log('stop');
	// 		clearInterval(id);
	// 	}, 3000);

	// })();
})



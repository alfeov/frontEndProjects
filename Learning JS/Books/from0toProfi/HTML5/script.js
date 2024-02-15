'use strict';

// const message = document.getElementById("message");
// const output = document.querySelector(".output");
// const myInput = document.querySelector("input");
// myInput.addEventListener("change", uploadAndReadFile);


// function uploadAndReadFile () {
// 	Array.from(this.files).forEach(file => {
// 		const img = document.createElement('img');
// 		const fr = new FileReader();
// 		fr.onload = function() {
// 			img.src = event.target.result;
// 		};
// 		fr.readAsDataURL(file);
// 		output.appendChild(img);
// 	})
// }

window.addEventListener('load', () => {
	navigator.geolocation.getCurrentPosition(console.dir);
})
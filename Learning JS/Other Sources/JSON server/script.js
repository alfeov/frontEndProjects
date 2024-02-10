'use strict';

fetch('http://localhost:3000/comments')
	.then(response => response.json())
	.then(console.log);
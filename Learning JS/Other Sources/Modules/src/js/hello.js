// function hello() {
// 	console.log('Hello from external module');
// }

// module.exports = {hello};

//?

// module.exports = () => {
// 	console.log('Hello from external module');
// };

//?

// exports.hello = function() {
// 	console.log('Hello from external module');
// }

//!

export default function welcome() {
	console.log('Hello from external module');
}

//!

export function hello() {
	console.log('Hello from external module');
}

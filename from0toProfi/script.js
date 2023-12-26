// let a = ['apple', 'dog', 'BANG!'];

// console.table(a);

/* ! 
let startPoint = prompt("Start value:");
let finishPoint = prompt("Finish value:");
let stopTrigger = prompt("Number of generations:");


let stopCounter = 0;
function rand(mult, shift, stopTrigger) {
	console.log(Math.floor(Math.random()*(+mult)+(+shift)));
	let timeout = setTimeout(rand, 50, mult, shift, stopTrigger);
	stopCounter++;
	if (stopCounter >= stopTrigger) clearTimeout(timeout);
	document.writeln(Math.floor(Math.random()*(+mult)+(+shift)) + "<br>");
}


let mult, shift;
if (startPoint && finishPoint) {
	if (isFinite(startPoint) && isFinite(finishPoint)) {
		if (+startPoint > +finishPoint) {
			[finishPoint, startPoint] = [startPoint, finishPoint];
		}
		if (+startPoint < 0 && +finishPoint < 0) {
			mult = Math.abs(+startPoint + Math.abs(finishPoint)) + 1;
		} else if (+startPoint < 0 && +finishPoint > 0) {
			mult = Math.abs(Math.abs(startPoint) + Math.abs(finishPoint)) + 1;
		}
		else {
			mult = Math.abs(finishPoint) - Math.abs(startPoint) + 1;
		}
		shift = startPoint;
		console.log(`Mult is ${mult}`);
		console.log(`Shift is ${shift}`); 
		if (isFinite(stopTrigger) && stopTrigger > 0 || stopTrigger == "") {
			setTimeout(rand, 50, mult, shift, stopTrigger);
		} else {
			console.log("Something went wrong");
		}
	} else {
		console.log("Not correct type");
	}
} else {
	console.log("Values set are empty");
}
*/


// console.log("Hi, \"Kailh!\#");
// let a = 212;
// let b = 0b10111;
// let o = 0o2100;
// let x = 0xE16;

// console.table([a,b,o,x]);

// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));

// console.log(Number(null));
// console.log(typeof Number(null));
// console.log(Number(undefined)); //NaN
// console.log(typeof Number(undefined)); //Number

// let str = "string";
// for (let index = 0; index < str.length; index++) {
// 	console.log(str[index] + ("\n") + typeof str[index]);
// }

let op1 = 0;
let op2 = 0;
let op3 = 0;
let arr1 = ["apple: ", "mango", "nin"];

console.table([
	{principal:"op1++", value: arr1[op1++]}, 
	{principal:"op1", value: arr1[op1]}, 
	{principal: "---", value: "---"},
	{principal:"++op2", value: arr1[++op2]},
	{principal:"op2", value: arr1[op2]},
	{principal: "---", value: "---"},
	{principal:"op3", value: arr1[op3]},
	{principal:"op3 + 1", value: arr1[op3 + 1]},
	{principal: "---", value: "---"},
]);

//js testing git
//git commit and merge
//banch1
//banch2v2
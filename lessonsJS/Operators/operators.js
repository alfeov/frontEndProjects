let OP1 = 4;
let OP2 = 3;
// let OP3 = OP1 + (OP2 = OP1 ** 2);
// console.log(OP3);

// console.log((OP1*=OP1, OP2=-OP2));

// OP1 = "HIjack";
// OP2 = "HIJack";

// let OP3 = 2;

// OP3 *= OP2 + OP1;

// console.log(OP3);


// let var1 = 1;
// let var2 = 0;
// console.log(null || undefined || var1);
// console.log(null && undefined && var1);


// console.log("22" + - 1);
// //? return 22-1 because it is "22" + -1(>"-1");
// console.log("22" - + 1);
// //? return 21 bacause it is 22(<"22") - +1;  

// lat:
// for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 		console.log(size);
// 		if (size === 1) continue lat;
// 	}	
// }

let objarr1 = [
	{hay: 0, value: 3},
	{hay: 1, value: 9},
];

let map1 = objarr1.map(({hay, value}) => ({hay: hay+1, newValue: value ** 2}));

console.log(map1);
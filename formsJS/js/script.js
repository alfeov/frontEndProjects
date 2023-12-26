const mainForm = document.forms.mainForm;
// console.log(mainForm);

const formInput = mainForm.getElementsByClassName("formInput");

for (let index = 0; index < formInput.length; index++) {
	const defPlaceholder = formInput[index].placeholder;
	formInput[index].addEventListener("focus", function (e) {
		formInput[index].placeholder = "";
	})
	formInput[index].addEventListener("blur", function (e) {
		formInput[index].placeholder = defPlaceholder;
	})
}

//!

formInput.FIO.focus();

setTimeout(() => {
	formInput.FIO.blur();
}, 10000);

//!

mainForm.addEventListener("submit", (e) => {
	for (let index = 0; index < formInput.length-1; index++) {
		const element = formInput[index];
		if (element.value) console.log("OK") 
		else if (!element.value) {
			e.preventDefault();
			element.classList.add("formInputError");
		}
	}
});

//!

const mail = mainForm.Email;
console.log(mail); 

mainForm.addEventListener("submit", (e) => {
	if(emailTest(mail)) {
		mail.classList.add("formInputError");
		e.preventDefault();
	}
	// else if (!emailTest(mail)) {
	// 	mail.classList.remove("formInputError");
	// }
})

function emailTest(email) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value);
};

//!

for (let index = 0; index < formInput.length-1; index++) {
	formInput[index].addEventListener("focus", (e) => {
		if (formInput[index].classList.contains("formInputError")) formInput[index].classList.remove("formInputError");
	})
};

//!

// const answerBlock = mainForm.answerBlock2;
// for (let index = 0; index < answerBlock.length; index++) {
// 	let element = answerBlock[index];
// 	answerBlock[index].checked = true;

// 	console.log(element.checked);
// }

// console.log(selectBlock.value);



// for (let index = 0; index < optionsBlock.length; index++) {
// 	let element = optionsBlock[index];
// 	console.log(element.index);
// }

//!

// const optionsBlock = mainForm.select.options;
// var indexI = optionsBlock.length;

// selectBlock = mainForm.select;
// document.getElementById("answer2_1").addEventListener("click", (event) => {
// 	let nwOption = new Option(`Выбор ${indexI+1}`,`Select${indexI}`,false,false);
// 	selectBlock.append(nwOption);
// 	// console.log(selectBlock[indexI].text);
// 	// console.log(selectBlock[indexI].value);

// 	indexI++;
// })	

//!

// const header = document.querySelector("h1");
// mainForm.addEventListener("focusin", (e) => {
// 	header.style.opacity = "0";
// 	console.log("Deep",e.target);
// })
// mainForm.addEventListener("focusout", (e) => {
// 	header.style.opacity = "1";
// 	console.log("Also deep...",e.target);
// })

//!

// console.log(formInput)

// for (let index = 0; index < formInput.length; index++) {
// 	formInput[index].addEventListener("change", (e) => {
// 		console.log(`Change value is: ${formInput[index].value}`);
// 	});
// };
// for (let index = 0; index < formInput.length; index++) {
// 	formInput[index].addEventListener("input", (e) => {
// 		console.log(`Value: ${formInput[index].value}`);
// 	});
// };

//!

// for (let index = 0; index < formInput.length; index++) {
// 	formInput[index].addEventListener("copy", (e) => {
// 		console.log("Copy");
// 		e.preventDefault();
// 	});
// };
// for (let index = 0; index < formInput.length; index++) {
// 	formInput[index].addEventListener("cut", (e) => {
// 		console.log("Cut");
// 	});
// };
// for (let index = 0; index < formInput.length; index++) {
// 	formInput[index].addEventListener("paste", (e) => {
// 		console.log("Paste");
// 		// e.preventDefault();
// 	});
// };

//!



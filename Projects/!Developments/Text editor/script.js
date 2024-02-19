let optionsBtns = document.querySelectorAll('.options button');

let formatBtns = document.querySelectorAll('.format_btns');
let listBtns = document.querySelectorAll('.list_btns');
let doBtns = document.querySelectorAll('.do_btns');
let restBtns = document.querySelectorAll('.rest_btns');

let fontColor = document.querySelector('#font-color');
let highlightColor = document.querySelector('#highlight-color');
let textArea = document.querySelector('#text-input');

//listener init
const initializer = () => {
  highlighter(formatBtns, false);
  highlighter(listBtns, true);
  highlighter(restBtns, false);
}

// !
// const modify = (command, defUI, value) => {
// 	document.execCommand(command, defUI, value);
// }

// optionsBtns.forEach((btn) => {
// 	btn.addEventListener('click', () => {
		
// 	})
// })
// !

const highlighter = (btnsClass, removeStyleFromOther) => {
  btnsClass.forEach((btn) => {
    btn.addEventListener('click', () => {
      //removeStyleFromOther  = true means only one button should be highlight and other would be normal
      if (removeStyleFromOther ) {
				let isActive;
        //If clicked button is already active
        if (btn.classList.contains("active")) {
          isActive = true;
        }
        //Remove highlight from all buttons
        highlighterRemover(btnsClass);
        if (!isActive) {
          //highlight current
          btn.classList.add("active"); //?! add or toggle possible bug in future
        }
      } else {
        //if other buttons can be highlighted
        btn.classList.toggle('active');
      }
    });
  });
};

const highlighterRemover = (btnsClass) => {
  btnsClass.forEach((btn) => {
    btn.classList.remove('active');
  });
};
window.onload = initializer();
const subOutput = document.querySelector('#sub_output');
const output = document.querySelector('#output');
const numBtns = document.querySelectorAll('.input-number input');
const operatorBtns = document.querySelectorAll('.input-operator input');

const optionBtn = document.querySelectorAll('.options input[type="button"]');

let storage = [];
let operator = [];

clickOperatBtn(operatorBtns);
clickNumBtn(numBtns);

// 1.
function clickNumBtn() {
  numBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      output.value += btn.value;
    });
  });
}

// 2.
function clickOperatBtn(operatorBtns) {
  operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      storage.push(output.value);
      operator.push(btn.value);
      output.value = '';
      // subOutput.value += output.value;
    });
  });
}

//3. reset
optionBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.value === 'RESET') {
      output.value = '';
      storage = [];
      operator = [];
    }
  });
});

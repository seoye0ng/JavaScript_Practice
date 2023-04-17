const subOutput = document.querySelector('#sub_output');
const output = document.querySelector('#output');
const numBtns = document.querySelectorAll('.input-number input');
const operatorBtns = document.querySelectorAll('.input-operator input');

const optionBtn = document.querySelectorAll('.options input[type="button"]');

let storage = [];
let operator = [];

clickOperatBtn(operatorBtns);
clickNumBtn(numBtns);
clickOptionBtn();

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
      if (btn.value === '=') {
        output.value = calculation();
      }
      // subOutput.value += output.value;
    });
  });
}

//4. calculation
function calculation() {
  for (let i = 0; i < storage.length; i += 2) {
    for (let j = 0; j < operator.length; i++) {
      if (operator[j] === '+') {
        return parseInt(storage[i]) + parseInt(storage[i + 1]);
      } else if (operator[i] === '-') {
        return parseInt(storage[i]) - parseInt(storage[i + 1]);
      } else if (operator[i] === '*') {
        return parseInt(storage[i]) * parseInt(storage[i + 1]);
      } else if (operator[i] === '/') {
        return parseInt(storage[i]) / parseInt(storage[i + 1]);
      }
    }
  }
}

//3. reset, backspace
function clickOptionBtn() {
  optionBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.value === 'RESET') {
        output.value = '';
        storage = [];
        operator = [];
      } else if (btn.value === 'BACKSPACE') {
        output.value = output.value.slice(0, -1);
      }
    });
  });
}

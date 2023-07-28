let result = document.getElementById('result');
let expression = '';

function appendToResult(value) {
  expression += value;
  result.value = expression;
}

function calculate() {
  try {
    expression = eval(expression);
    result.value = expression;
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  expression = '';
  result.value = '';
}

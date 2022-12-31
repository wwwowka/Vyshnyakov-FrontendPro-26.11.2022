const operator = prompt('Enter one of: +, -, *, /.', '+');
const firstNumber = prompt('Enter the first number.', '123');
const secondNumber = prompt('Enter the second number.', '123');

function countTwoNumbers(oper) {
  return function (first, second) {
    alert(eval(first + oper + second));
  };
}

const operCount = countTwoNumbers(operator);
const result = operCount(firstNumber, secondNumber);

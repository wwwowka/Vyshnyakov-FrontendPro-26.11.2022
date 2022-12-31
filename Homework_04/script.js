const operator = prompt('Enter one of: add, sub, mult, div.', 'add');
const firstNumber = prompt('Enter the first number.', '123');
const secondNumber = prompt('Enter the second number.', '123');

switch (operator) {
  case 'add':
    alert(`${firstNumber}+${secondNumber}=${+firstNumber + +secondNumber}`);
    break;
  case 'sub':
    alert(`${firstNumber}-${secondNumber}=${firstNumber - secondNumber}`);
    break;
  case 'mult':
    alert(`${firstNumber}*${secondNumber}=${firstNumber * secondNumber}`);
    break;
  case 'div':
    alert(`${firstNumber}/${secondNumber}=${firstNumber / secondNumber}`);
    break;
  default:
    alert('Sorry, you entered an invalid value.');
}
const operator = prompt("Enter one of: add, sub, mult, div.", "add");
const firstNumber = prompt("Enter the first number.", "123");
const secondNumber = prompt("Enter the second number.", "123");
const addValue = firstNumber + secondNumber;
const subValue = firstNumber - secondNumber;
const multValue = firstNumber * secondNumber;
const divValue = firstNumber / secondNumber;

switch (operator) {
    case "add":
        alert(`${firstNumber}+${secondNumber}=${addValue}`);
      break;
    case "sub":
        alert(`${firstNumber}-${secondNumber}=${subValue}`);
      break;
    case "mult":
        alert(`${firstNumber}-${secondNumber}=${multValue}`);
      break;
    case "div":
        alert(`${firstNumber}-${secondNumber}=${divValue}`);
      break;
    default:
      console.log(`Sorry, you entered an invalid value.`);
  }
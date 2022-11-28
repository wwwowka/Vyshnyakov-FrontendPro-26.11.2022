const firstNumber = prompt("Enter the first number.", "123");
const secondNumber = prompt("Enter the second number.", "123");
const sumValue = firstNumber + secondNumber;
const minusValue = firstNumber - secondNumber;
const multiValue = firstNumber * secondNumber;
const divideValue = firstNumber / secondNumber;

alert(`
        • ${firstNumber}+${secondNumber}=${sumValue}
        • ${firstNumber}-${secondNumber}=${minusValue}
        • ${firstNumber}*${secondNumber}=${multiValue}
        • ${firstNumber}/${secondNumber}=${divideValue}
    `);


const arrayDifTypes = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];

function calcArithmeticMean(arr) {
  let sumNum = 0;
  let countNum = 0;
  for (const el of arr) {
    if (typeof el === 'number') {
      sumNum += el;
      countNum += 1;
    }
  }
  return (sumNum / countNum);
}

console.log(calcArithmeticMean(arrayDifTypes));

function doMath(x, znak, y) {
  let result = 0;

  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = (x * y) / 100;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      break;
  }

  return result;
}

const userNumX = +prompt('Введіть перше число');
const userZnak = prompt('Введіть знак');
const userNumY = +prompt('Введіть друге число');

console.log(doMath(userNumX, userZnak, userNumY));

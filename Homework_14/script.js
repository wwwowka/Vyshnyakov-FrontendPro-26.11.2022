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

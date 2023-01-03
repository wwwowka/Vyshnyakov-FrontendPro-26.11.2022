let num = 0;
function sumSum() {
  let sum = 0;
  return function (a) {
    return sum += Number(a);
  };
}
const sum = sumSum();

do {
  num = prompt('Enter number:');
  alert(sum(num));
} while (num !== null && num !== '');

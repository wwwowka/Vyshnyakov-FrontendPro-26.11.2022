const num = +prompt('Enter number:');
const degree = +prompt('Enter degree:');
function calcPow(num, degree) {
  if (degree === 1) {
    return num;
  }
  return num * calcPow(num, degree - 1);
}
alert(calcPow(num, degree));

/* eslint-disable no-alert */
const userLenghtArray = +prompt('Введіть довжену массиву, числом');

const userArray = new Array(userLenghtArray);
console.log(userArray);

for (let i = 0; i < userLenghtArray; i += 1) {
  userArray[i] = (prompt(`Введіть ${i}-й елемент массиву: текст або число`));
  console.log(userArray);
}

/* console.log(userArray.sort((a, b) => a - b)); */
// ['aaa', 'a', '5', '50', '00', '000', '000000000', '00', '00000', '111111111']
// ['aaa', 'a', '00', '000', '000000000', '00', '00000', '5', '50', '111111111']

/* console.log(userArray.sort((a, b) => (Number.isNaN(+a) || Number.isNaN(+b)
  ? a.localeCompare(b)
  : a - b))); */
// ['aaa', 'a', '5', '50', '00', '000', '000000000', '00', '00000', '111111111']
// ['00', '000', '000000000', '00', '00000', '5', '50', '111111111', 'a', 'aaa']

console.log(userArray.sort((a, b) => (b < a) - (a < b)));
/* ['aaa', 'a', '5', '50', '00', '000', '000000000', '00', '00000', '111111111']
   ['00', '00', '000', '00000', '000000000', '111111111', '5', '50', 'a', 'aaa'] */

console.log(userArray.splice(1, 3));

console.log(userArray);

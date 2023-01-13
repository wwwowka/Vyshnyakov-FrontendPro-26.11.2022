/* eslint-disable no-alert */
const userLenghtArray = +prompt('Введіть довжену массиву, числом');

const userArray = new Array(userLenghtArray);

console.log(userArray);

for (let i = 0; i < userLenghtArray; i += 1) {
  userArray[i] = (prompt(`Введіть ${i}-й елемент массиву: текст або число`));
  console.log(userArray);
}

console.log(userArray.sort((a, b) => a - b));

console.log(userArray.splice(1, 3));

console.log(userArray);

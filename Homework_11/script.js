const userLenghtArray = +prompt("Введіть довжену массиву, числом");

const userArray = new Array(userLenghtArray);

console.log(userArray);

for (let i = 0; i < userLenghtArray; i++) {
  userArray[i] = (prompt(`Введіть ${i}-й елемент массиву: текст або число`));
  console.log(userArray);
}

console.log(userArray.sort());

console.log(userArray.splice(1, 3));

console.log(userArray);


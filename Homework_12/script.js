const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51,
  27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів.

let sumPositive = 0;
let quantityPositive = 0;
let quantityPositiveOdd = 0;
let sumPositiveEven = 0;
let sumPositiveOdd = 0;
let multPositive = 1;

for (const num of array) {
  if (num >= 0) {
    sumPositive += num;
    multPositive *= num;
    quantityPositive++;
    if (num % 2 != 0) {
      sumPositiveOdd += num;
      quantityPositiveOdd++;
    } else {
      sumPositiveEven += num;
    }
  }
}

console.log(`Сума позитивних елементів:${sumPositive}; кількість:${quantityPositive}`);

// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.

let min = array[0];
let indexMin = 0;
let max = array[0];
let indexMax = 0;
let i = 0;

for (const value of array) {
  if (value < min) {
    min = value;
    indexMin = i;
  }

  if (value > max) {
    max = value;
    indexMax = i;
  }
  i++;
}
console.log(`Мінімальний елемент масиву:${min}; його порядковий номер:${indexMin}`);
console.log(`Максимальний елемент масиву:${max}; його порядковий номер:${indexMax}`);

// Визначити кількість негативних елементів.

let quantityNegative = 0;
for (const num of array) {
  if (num < 0) {
    quantityNegative++;
  }
}
console.log(`Кількість негативних елементів: ${quantityNegative}`);

// Знайти кількість непарних позитивних елементів.

console.log(`Кількість непарних позитивних елементів: ${quantityPositiveOdd}`);

// Знайти кількість парних позитивних елементів.

console.log(`Кількість парних позитивних елементів: ${quantityPositive - quantityPositiveOdd}`);

// Знайти суму парних позитивних елементів.

console.log(`Сума парних позитивних елементів: ${sumPositiveEven}`);

// Знайти суму непарних позитивних елементів.

console.log(`Сума непарних позитивних елементів: ${sumPositiveOdd}`);

// Знайти добуток позитивних елементів.

console.log(`Добуток позитивних елементів: ${multPositive}`);

// Знайти найбільший серед елементів масиву, остальні обнулити

for (let i = 0; i < array.length; i++) {
  if (array[i] !== array[indexMax]) {
    array[i] = 0;
  }
}

console.log(`Найбільший серед елементів масиву, остальні обнулити: ${array}`);

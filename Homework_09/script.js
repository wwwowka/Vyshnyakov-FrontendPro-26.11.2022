console.log('\nВивести на сторінку в один рядок через кому числа від 10 до 20:');
let stringNum = '';
for (let i = 10; i <= 20; i++) {
  stringNum += i;
  if (i < 20) {
    stringNum += ', ';
  }
}
console.log(stringNum);

console.log('\nВивести квадрати чисел від 10 до 20:');
let stringSquareNum = '';
for (let i = 10; i <= 20; i++) {
  stringSquareNum += i * i;
  if (i < 20) {
    stringSquareNum += ', ';
  }
}
console.log(stringSquareNum);

console.log('\nВивести таблицю множення на 7:');
let stringMulTable7 = '';
for (let i = 1; i <= 10; i++) {
  stringMulTable7 += `7*${i}=${7 * i}, `;
}
console.log(stringMulTable7);

console.log('\nЗнайти суму всіх цілих чисел від 1 до 15:');
let integer = 0;
for (let i = 1; i <= 15; i++) {
  integer += i;
}
console.log(integer);

console.log('\nЗнайти добуток усіх цілих чисел від 15 до 35:');
let numberProduct = 1n;
for (let i = 15n; i <= 35n; i++) {
  numberProduct *= i;
}
console.log(numberProduct);

console.log('\nЗнайти середнє арифметичне всіх цілих чисел від 1 до 500:');
let arithmeticMean = 0;
for (let i = 1; i <= 500; i++) {
  arithmeticMean += i;
}
console.log(arithmeticMean / 500);

console.log('\nВивести суму лише парних чисел в діапазоні від 30 до 80:');
let evenNumbers = 0;

for (let i = 30; i <= 80; i += 2) {
  evenNumbers += i;
}
console.log(evenNumbers);

console.log('\nВивести всі числа в діапазоні від 100 до 200 кратні 3:');
let multiplesOf3 = '';
for (let i = 100; i <= 200; i += 3) {
  if (i > 100) {
    multiplesOf3 += i;
    if (i < 200 - 3) {
      multiplesOf3 += ', ';
    }
  }
}
console.log(multiplesOf3);

console.log('\nДано натуральне число. Знайти та вивести на сторінку всі його дільники:');
const naturalNumber = 2022; // введіть натуральне число
let divisorNumber = '';
let evenDivisor = 0;
for (let i = 0; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    divisorNumber += i;
    if (i % 2 === 0) {
      evenDivisor++;
    }
    if (i < naturalNumber) {
      divisorNumber += ', ';
    }
  }
}
console.log(divisorNumber);

console.log('\nВизначити кількість його парних дільників:');
console.log(evenDivisor);

// Знайти суму його парних дільників.
console.log('\nНадрукувати повну таблицю множення від 1 до 10:');
let stringMulTable = '';
for (let mult = 1; mult <= 10; mult++) {
  for (let i = 1; i <= 10; i++) {
    stringMulTable += `${mult}*${i}=${mult * i}`;
    if (i < 10) {
      stringMulTable += '\t\t';
    }
  }
  stringMulTable += '\n';
}
console.log(stringMulTable);

// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let stringNum = "";
for (let i = 10; i <= 20; i++) {
    stringNum += i;
    if (i < 20) {
        stringNum += ", ";
    }
}
console.log(stringNum);

// Вивести квадрати чисел від 10 до 20.
let stringSquareNum = "";
for (let i = 10; i <= 20; i++) {
    stringSquareNum += i * i;
    if (i < 20) {
        stringSquareNum += ", ";
    }
}
console.log(stringSquareNum);

// Вивести таблицю множення на 7.
let stringMulTable7 = "";
for (let i = 1; i <= 10; i++) {
    stringMulTable7 += "7*" + i + "=" + 7 * i + ", ";
}
console.log(stringMulTable7);

// Знайти суму всіх цілих чисел від 1 до 15.
let integer = 0;
for (let i = 1; i <= 15; i++) {
    integer += i; 
}
console.log(integer);

// Знайти добуток усіх цілих чисел від 15 до 35.
let numberProduct = 1n;
for (let i = 15n; i <= 35n; i++) {
    numberProduct *=  i; 
}
console.log(numberProduct);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let arithmeticMean = 0;
let i = 1
let j = 500;
for (; i <= j; i++) {
    arithmeticMean += i; 
}
console.log(arithmeticMean/j);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let evenNumbers = 0;

for (let i = 30; i <= 80; i += 2) {
    evenNumbers += i; 
}
console.log(evenNumbers);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let multiplesOf3 = "";
for (let i = 100; i <= 200; i += 3) {
    multiplesOf3 += i;
    if (i < 200-3) {
        multiplesOf3 += ", ";
    }
}
console.log(multiplesOf3);

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
// Надрукувати повну таблицю множення від 1 до 10.
let stringMulTable = "";
let mult = 0;
for (let mult = 1; mult <= 10; mult++) {
   
  for (let i = 1; i <= 10; i++) {
    stringMulTable += mult + "*" + i + "=" + mult * i;
    if (i < 10) {
        stringMulTable += "\t\t";
    }
  }   
  stringMulTable += '\n';
}
console.log(stringMulTable);


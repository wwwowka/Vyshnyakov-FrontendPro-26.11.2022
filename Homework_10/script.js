console.log("\nВивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….):")
let stringNum = "";
for (let i = 20; i <= 30; i += 0.5) {
    stringNum += i;
    if (i < 30) {
        stringNum += " ";
    }
}
console.log(stringNum);


console.log("\nОдин долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів:")
const exchangeRate = 27;
let sumDollar = "";
for (let i = 10; i <= 100; i += 10) {
    sumDollar += i * exchangeRate;
    if (i < 100) {
        sumDollar += ", ";
    }
}
console.log(sumDollar);

//
const integerN = 4011; //введіть ціле число
//

console.log("\nДане ціле число " + integerN + ". Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N:")

let stringSquareNum = "";
for (let i = 1; i <= 100; i++) {
    if (i * i > integerN) {
        break;
    }

    stringSquareNum += i + ", ";
}
console.log(stringSquareNum);


console.log("\nДане ціле число " + integerN + ". З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе:")
let checkPrime = true;

if (integerN > 1) {
    for (let i = 2; i < integerN; i++) {
        if (integerN % i == 0) {
            checkPrime = false;
            break;
        }
    }

    if (checkPrime) {
        console.log(integerN + " є простим");
    } else {
        console.log(integerN + " Не є простим");
    }
} else {
    console.log("Число повинно бути больше 1");
}


console.log("\nДане число " + integerN + ". Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна):")
let degree = -1;
let checkDegree = false;
for (let i = 1; i <= integerN; i = i * 3) {
    degree++;
    if (i === integerN) {
      checkDegree = true;  
    }
}
if (checkDegree) {
    console.log(integerN + " можна одержати це число шляхом зведення числа 3 у " + degree + " ступінь");
} else {
    console.log(integerN + " Не можна одержати це число шляхом зведення числа 3 у деякий ступінь");
}

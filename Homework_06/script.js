const firstString = Number(prompt("Enenter the first number.", "12345"));
const secondString = Number(prompt("Enenter the second number.", "12345"));
const thirdString = Number(prompt("Enenter the third number.", "12345"));

const arithmeticMean = (firstString + secondString + thirdString) / 3;

if (isNaN(arithmeticMean)) {
    alert(`You entered an invalid value.`);
} else {
    alert(`The arithmetic mean of three numbers: ${arithmeticMean}`);
}
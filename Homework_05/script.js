const firstString = prompt("Enter the first string.", "Lorem ipsum dolor.");
const secondString = prompt("Enter the second string.", "Fugit ullam consectetur.");
const thirdString = prompt("Enter the third string.", "Quae, magnam!");

alert(`${secondString} ${firstString} ${thirdString}`);

const enteredNumber = prompt("Enter five-digit number.", 98765);

/* const digitFifth  = enteredNumber%10;
const digitFourth  = ((enteredNumber-enteredNumber%10)/10)%10;
const digitThird  = ((enteredNumber-enteredNumber%100)/100)%10;  
const digitSecond = ((enteredNumber-enteredNumber%1000)/1000)%10; 
const digitFirst = (enteredNumber-enteredNumber%10000)/10000;
alert(`${digitFirst} ${digitSecond} ${digitThird} ${digitFourth} ${digitFifth}`)
 */

alert(`${enteredNumber[0]} ${enteredNumber[1]} ${enteredNumber[2]} ${enteredNumber[3]} ${enteredNumber[4]}`);

// function stringToNumber(str) {
//   return parseInt(str);
// }
// //===============================================================================

// function noSpace(x) {
//   return x.replaceAll(" ", "");
// }

// //===============================================================================


// function squareSum(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] * numbers[i];
//   }

//   return sum;
// }

// //===============================================================================

// function oddOrEven(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   if (sum % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// //===============================================================================

// function rowSumOddNumbers(n) {
//   return n * n * n;
// }

// //===============================================================================

// function filter_list(l) {
//   return l.filter((value) => typeof value === "number");
// }

// //===============================================================================

// function summation(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// }

// //===============================================================================

// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }

// //===============================================================================

// function whatday(n) {
//   switch (n) {
//     case 1: return "Sunday";
//     case 2: return "Monday";
//     case 3: return "Tuesday";
//     case 4: return "Wednesday";
//     case 5: return "Thursday";
//     case 6: return "Friday";
//     case 7: return "Saturday";
//     default: return "Wrong, please enter a number between 1 and 7";
//   }
// }

// //===============================================================================

// function digitize(n) {
//   return String(n)
//     .split("")
//     .reverse()
//     .map(Number);
// }

// //===============================================================================

// function multipleOfIndex(array) {
//   return array.filter((n, i) => {
//     if (n === 0) return "0";
//     if (n % i === 0) return n;
//   });
// }

// //===============================================================================

// function numberToPower(number, power) {
//   let mul = 1;

//   for (let i = 1; i <= power; i++) {
//     mul *= number;
//   }

//   return mul;
// }

// //===============================================================================

// function sumMix(x) {
//   let sum = 0;

//   for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//   }

//   return sum;
// }

// //===============================================================================

// function repeatStr(n, str) {
//   return str.repeat(n);
// }

// //===============================================================================

// function opposite(number) {
//   return -number;
// }

// //===============================================================================

// function numberToString(num) {
//   return String(num);
// }

// //===============================================================================

// function multiply(a, b) {
//   return a * b;
// }

// //===============================================================================

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// //===============================================================================

// function stringToArray(str) {
//   return str.split(" ");
// }

// //===============================================================================

// const reverseSeq = n => {
//   let arr = [];

//   for (let i = n; i >= 1; i--) {
//     arr.push(i);
//   }

//   return arr;
// };

// //===============================================================================

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// //===============================================================================

// const setAlarm = (e, v) => (e && !v) ? true : false;

// //===============================================================================

// function fiveLine(s) {
//   s = s.trim();
//   let result = "";

//   for (let i = 1; i <= 5; i++) {
//     result += s.repeat(i) + "\n";
//   }

//   return result.slice(0, result.length - 1);
// }

// //===============================================================================


// var min = function(list){
//     return Math.min(...list);
// }

// var max = function(list){
//     return Math.max(...list);
// }

// //===============================================================================

// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return number * 8;
//     } else {
//         return number * 9;
//     }
// }

// //===============================================================================

// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// //===============================================================================

// function summation(num) {

//   let sum = 0;

//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }

//   return sum;

// }

//===============================================================================



// function doubleInteger(i) {

//   return i * 2;

// }

// //===============================================================================



// function booleanToString(b) {

//   return b.toString();

// }

// //===============================================================================



// function noSpace(x) {

//   return x.replaceAll(" ", "");

// }

// //===============================================================================



// function greet() {

//   return "hello world!";

// }

// //===============================================================================

// function opposite(number) {
//   return -number;
// }

// //===============================================================================

// function greet() {
//   return "hello world!";
// }

// //===============================================================================

// function removeSmallest(n) {
//   let min = Math.min(...n);
//   let res = [];
//   let active = true;

//   for (let value of n) {
//     if (value == min && active) {
//       active = false;
//       continue;
//     }
//     res.push(value);
//   }

//   return res;
// }

// //===============================================================================

// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }

// //===============================================================================

// function positiveSum(arr) {
//   return arr.filter(value => value > 0).reduce((sum, value) => sum + value, 0);
// }

// //===============================================================================

// function solution(str) {
//   return str.split('').reverse().join('');
// }

// //===============================================================================

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// //===============================================================================

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// //===============================================================================

// function boolToWord(bool) {
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

// //===============================================================================

// function numberToString(num) {
//   return num + "";
// }

// //===============================================================================

// function makeNegative(num) {
//   if (num > 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }

// //===============================================================================

// function multiply(a, b) {
//   return a * b;
// }

// //===============================================================================

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter number of rows:- "));

// function fibonacci(n) {
//   let a = 0,
//     b = 1,
//     nextTerm;
//   for (let i = 1; i <= n; i++) {
//     process.stdout.write(b + " ");
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
//   }
// }
// fibonacci(n);

//Output: 1 1 2 3 5 8 13 21 34 55

//---------------------------------------------

// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   digits.unshift(1);
//   return digits;
// };
// console.log(plusOne([10,10,9])); // Output: [1, 0, 0, 0]

//----------------------------------------------

// var addBinary = function (a, b) {
//   let result = "";
//   let i = a.length - 1;
//   let j = b.length - 1;
//   let carry = 0;

//   while (i >= 0 || j >= 0 || carry) {
//     if (a[i] !== "0" && a[i] !== "1" && i >= 0 ) {
//       throw new Error("Invalid input: a should be a binary string");
//     } else if (b[j] !== "0" && b[j] !== "1" && j >= 0) {
//       throw new Error("Invalid input: b should be a binary string");
//     } else {
//       let sum = carry;

//       if (i >= 0) sum += Number(a[i--]);
//       if (j >= 0) sum += Number(b[j--]);
//       result = (sum % 2) + result;
//       carry = Math.floor(sum / 2);
//     }
//   }
//   return result;
// };

// console.log(addBinary("1010", "1011")); // Output: "10101"
// console.log(addBinary("11", "1")); // Output: "100"

//----------------------------------------------

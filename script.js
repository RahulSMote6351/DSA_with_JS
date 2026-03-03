// ------------------Swapping of two numbers------------------
// let a = 10;
// let b = 20;

// console.log("Before Swaping:  a = " + a);
// console.log("Before Swaping:  b = " + b);

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// --------------

// [a,b]= [b,a];

// --------------

// let c = a;
// a=b;
// b=c;

// --------------

// a = a + b;
// b = a - b;
// a = a - b;

//--------------

// console.log("")
// console.log("After Swaping:  a = " + a);
// console.log("Afte Swaping:  b = " + b);

// ------------------Swapping using function------------------
//    let x=5;
//   let y=10;

//   function swapping(x,y){
//     return [y,x];

//   }
//  [x,y]= swapping(x,y);
//   console.log("x =",x);
//   console.log("y =",y);

// ------------------calculate area and perimeter of rectangle------------------

// let a = 5;
// let b = 7;

// console.log(a*b);
// console.log(2 * (a + b));

// ------------------Area of triangleby heron's formula------------------

// let a = 5;
// let b = 6;
// let c = 7;
// let s = (a + b + c) / 2;
// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
// console.log(area); // 14.70

// ------------------Circumference of circle------------------

// let  r = 12;
// let  circumference = (2 * Math.PI * r).toFixed(2);
// console.log(circumference); // 75.40

//---------------------------Area of circle------------------

// let r = 4;

// let pi = Math.floor(Math.PI);
// let area = pi * r * r;
// console.log(area); 48

// ------------------Electricity Bill Qustion------------------

// let unit = Number(prompt("Enter electricity unit:-"));
// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }
// amount += unit * 4;
// console.log("Total amount to be paid = " + amount);

// ------------------Switch Case------------------

// let num = Number((0.3 + 0.6).toFixed(1));

// switch (num) {
//   case 0.4:
//     console.log("hellooooooooooooo");
//     break;
//   case 0.9:
//     console.log("hello");
//     break;

//   default:
//     console.log("Namaste");
// }

// switch (true) {
//   case num >= 0.4 && num < 0.9:
//     console.log("hellooooooooooooo");
//     break;
//   case num >= 0.9 :
//     console.log("hello");
//     break;

//   default:
//     console.log("Namaste");
// }

// ------------------Factors of a number------------------

// let n = prompt("Enter a number:- ");

// if (n === null) {
//   console.log("User Cancelled");
// } else {
//   n = Number(n);
//   if (isNaN(n)) {
//     console.log("This is not a number");
//   } else {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//       if (n % i == 0) {
//         console.log(i);
//       }
//     }
//     console.log(n);
//   }
// } // 1 to n/2 factors and n itself    // 1 , 2 , 3 , 4 , 6 , 12

// ------------------Prime Number Check------------------

// let n = prompt("Enter a number:- ");

// if (n === null) {
//   console.log("User Cancelled");
// } else {
//   n = Number(n);
//   if (isNaN(n)) {
//     console.log("This is not a number");
//   } else {
//     let isPrime = true;
//     for (let i = 2; i <= Math.floor(n / 2); i++) {
//       if (n % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime && n > 1) {
//       console.log(n + " is a prime number");
//     } else {
//       console.log(n + " is not a prime number");
//     }
//   }
// }

// ------------------Reverse a number------------------

// let n = prompt("Enter a number:- ");

// if (n.trim() === "") {
//   console.log("Empty input is not allowed");
// } else {
//   if (n === null) {
//     console.log("User Cancelled");
//   } else {
//     n = Number(n);
//     if (isNaN(n)) {
//       console.log("This is not a number");
//     } else {
//       if (n > 0) {
//         let rev = 0;
//         while (n > 0) {
//           // Main Logic Starts
//           rev = rev * 10 + (n % 10); // It gives last digit of n number 1234 % 10 = 4
//           n = Math.floor(n / 10); // It removes last digit from n number 1234 / 10 = 123.4 => 123
//           // Main Logic Ends
//         }
//         console.log("Reversed Number is: " + rev);
//       }
//     }
//   }
// }

// ------------------Strong Number Check------------------

// let n = prompt("Enter a number:- ");

// if (n.trim() === "") {
//   console.log("Empty input is not allowed");
// } else {
//   if (n === null) {
//     console.log("User Cancelled");
//   } else {
//     n = Number(n);
//     if (isNaN(n)) {
//       console.log("This is not a number");
//     } else {
//       if (n > 0) {
//         let sum = 0;
//         let originalN = n;
//         // Strong Number List 1 , 2 , 145 , 40585
//         while (n > 0) {
//           let fact = 1;
//           let rem = n % 10;
//           for (let i = 1; i <= rem; i++) {
//             fact = fact * i;
//           }
//           sum = sum + fact;
//           n = Math.floor(n / 10);
//         }
//         if (sum === originalN) {
//           console.log(`${originalN} is Strong number`);
//         } else {
//           console.log(`${originalN} is not Strong number`);
//         }
//       } else {
//         console.log("should be positive number and greater than zero");
//       }
//     }
//   }
// }

// ------------------do while loop------------------

// let n = prompt("Enter a zero to exit:- ");

// do{
//     n = prompt("Enter a zero to exit:- ");
//  } while(n !== "0");

//  ------------------Number Guessing------------------

// let computerGuess = Math.floor(Math.random() * 100) + 1;

// let userGuess = 0;
// while (userGuess !== computerGuess) {
//   userGuess = Number(prompt("Enter your guess between 1 to 100:- "));
//   if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
//     console.log("Try again and number should be between 1 to 100");
//     continue;
//   }
//   if (userGuess > computerGuess) {
//     console.log("Your guess is too high");
//   } else if (userGuess < computerGuess) {
//     console.log("Your guess is too low");
//   } else {
//     console.log("Congrats You Guess 🎉 " + computerGuess);
//   }
// }

// ------------------Patterns ------------------

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter number of rows:- "));

//------------------Reverse 1 to n pattern------------------

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=n; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//------------------1 to n pattern------------------

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j + " ");
//     }
//     console.log();
// }

//------------------A to Z pattern Pattern------------------

// 65 to 90 A to Z Capital letters    ||    97 to 122 a to z Small letters

// A
// A B
// A B C
// A B C D
// A B C D E

// for (let i = 1; i <= n; i++) {
//   let ASCII = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ASCII) + " ");
//     ASCII++;
//   }
//   console.log();
// }

//------------------Reverse 1 to n pattern------------------

// * * * * *
// * * * *
// * * *
// * *
// *

//  for(let i=n; i>=1; i--){
//     for(let j= n; j>=1; j--){
//         if(j<=i){
//             process.stdout.write("* ");
//         }
//     }
//     console.log();
//  }

//------------------Reverse 1 to n pattern------------------

//        *
//      * *
//    * * *
//  * * * *
//* * * * *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }

//   console.log();
// }

//------------------One More Pattern------------------

//        *
//      * * *
//    * * * * *
//  * * * * * * *
//* * * * * * * * *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   for(let l=2; l<=i; l++){
//     process.stdout.write("* ");
//   }

//   console.log();
// }

//------------------Diamond Pattern------------------

//        *
//      * * *
//    * * * * *
//  * * * * * * *
//* * * * * * * * *
//  * * * * * * *
//    * * * * *
//      * * *
//        *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   for(let l=2; l<=i; l++){
//     process.stdout.write("* ");
//   }
//     console.log();
// }
//   for(let i = n-1; i>=1; i--){
//     for (let j = 1; j <= n-i; j++) {
//       process.stdout.write("  ");
//     }
//     for (let k = 1; k <= i; k++) {
//         process.stdout.write("* ");
//         }
//     for(let l=2; l<=i; l++){
//         process.stdout.write("* ");
//         }
//         console.log();
//     }

//------------------X Pattern------------------

// *       *  *       *  *       *
//   *   *      *   *      *   *
//     *          *          *
//   *   *      *   *      *   *
// *       *  *       *  *       *

// for (let i = 1; i <= n; i++) {
//     //first X
//   for (let j = 1; j <= n; j++) {
//     if (j == i || j == n - i + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   process.stdout.write("  ");
// //second X
//   for (let j = 1; j <= n; j++) {
//     if (j == i || j == n - i + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   process.stdout.write("  ");
// //third X
//   for (let j = 1; j <= n; j++) {
//     if (j == i || j == n - i + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

//------------------ V Pattern------------------
// *           *
//   *       *
//     *   *
//       *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2*n-1; j++) {
//     if (j == i || j == 2*n - i) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

//------------------Hourglass Pattern------------------

// * * * * * * *
//   * * * * *
//     * * *
//       *
//     * * *
//   * * * * *
// * * * * * * *

// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   for (let l = 2; l <= i; l++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// for (let i = 2; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   for (let l = 2; l <= i; l++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//------------------Kite Pattern------------------

//          *
//        *   *
//      *       *
//    *           *
//  *               *
//    *           *
//      *       *
//        *   *
//          *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// for (let i = n - 1; i >= 1; i--) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

//------------------Arrays------------------

// let arr = [55,underfined,25,null,12,"rahul",true,{},[],function(){ }];

//------------------Finding Maximum in an array------------------

// let arr = [55,5,25,2,45,22,552,12];

// let max = arr[0];

// for(let i=1; i<=arr.length-1; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log("Maximum is: " + max);

//------------------Finding Minimum in an array------------------

// let arr = [55,5,25,2,45,22,552,12];

// let max = arr[0];

// for(let i=1; i<=arr.length-1; i++){
//     if(max > arr[i]){
//         max = arr[i];
//     }
// }

// console.log("Minimum is: " + max);

// ------------------swap the negative ele to left and positive to right------------------

// let arr = [12, -7, -5, 3, -1, 9, -4, 6];
// let left = -0;
// let right = 0;
// while (right < arr.length) {
//     if (arr[right] < 0) {
//         let temp = arr[right];
//         arr[right]= arr[left];
//         arr[left]= temp;
//         left++;
//     }
//     right++;
// }

// console.log(arr);

let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the K number"));

reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);

console.log(arr);

function reverse(i, j) {
  while (i > j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

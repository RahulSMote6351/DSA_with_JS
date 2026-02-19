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

// ------------------left and right rotation by k element------------------

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter the K number"));

// k = k % arr.length;

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);

// console.log(arr);

// ------------------Strings------------------

// let str = "Rahul Mote";

// let rev = "";

// for(let i=str.length-1; i>=0; i--){
//   rev += str.charAt(i)
// }
// console.log(str)
// console.log(rev)

// let matrix = [
//     [4, 5, 6, 4,4,4,4,1,8,2,18,5,87,],
//     [1, 2, 3, 4,4,4,4,1,8,2,18,5,87,],
//     [3, 2, 3, 4,4,4,4,1,8,2,18,5,87,],
//     [5, 8, 9, 4,4,4,4,1,8,2,18,5,87,],
// ];

// console.log("2D Array (Matrix):");
// for (let i = 0; i < matrix.length; i++) {
//     let row = "";
//     for (let j = 0; j < matrix[i].length; j++) {
//         row += matrix[i][j] + " ";
//     }
//     console.log(row);
// }
//           Output:--
//          4 5 6 4 4 4 4 1 8 2 18 5 87
//          1 2 3 4 4 4 4 1 8 2 18 5 87
//          3 2 3 4 4 4 4 1 8 2 18 5 87
//          5 8 9 4 4 4 4 1 8 2 18 5 87

//----------------------subArr Concept and target Matching----------------------------

// let arr = [10,2,-2,-20,10];

// let countSubArrays = function(arr, k){
//     let map = new Map();
//     let sum =0 ,  count = 0;
//     map.set(sum , 1);
//     for(let i=0; i <= arr.length; i++){
//         sum += arr[i];
//         if(map.has(sum -k)) count += map.get(sum-k)
//             map.set(sum ,  (map.get(sum) || 0) + 1);
//     }
//     return count;

// }

// console.log(countSubArrays(arr , -10))

//---------------------------------------------------------------

// function sum(arr) {
//   return arr.reduce((ele, acc) => {
//         return ele + acc

// },0);

// }

// console.log(sum([1, 2, 5, 4]));

//---------------------------------------------------------------

// let n = 121;

// if (n > 0) {
//   let old = n;
//   let rev = 0;
//   while (n > 0) {
//     rev = rev * 10 + (n % 10); // It gives last digit of n number 1234 % 10 = 4
//     n = Math.floor(n / 10); // It removes last digit from n number 1234 / 10 = 123.4 => 123
//   }
//   if(rev == old){
//     console.log("the number is palindrome" , " " , old)
//   }
//   else{
//     console.log("the number is Not palindrome" , " " , old)
//   }

// }

//---------------------------------------------------------------

// let n = 9474;

// if (n > 0) {
//   let old = n;
//   let PowersSum = 0;
//   let digit = n.toString().length;
//   while (n > 0) {
//     let temp = n % 10;
//     PowersSum = PowersSum + temp ** digit;
//     n = Math.floor(n / 10);
//   }
//   if (old === PowersSum) {
//     console.log("The Number Is Armstrong No:-", old);
//   } else {
//     console.log("The Number Is Not Armstrong No:-", old);
//   }
// } else {
//   console.log("Please enter the Valid Input");
// } // 1 Armstrong Number List-9 , 153 , 370 , 371 , 407 , 1634 , 8208 , 9474

//---------------------------------------------------------------

// let x = 12;
// let y = 18;

// let a = x;
// let b = y;

// while(b !== 0){
//   let remainder = a % b;
//   a = b;
//   b = remainder;
// }

// let gcd  = a;
// let lcm = (x*y)/gcd;

// console.log("GCD",gcd);
// console.log("LCM",lcm);

// -------------------Fibonacci series----------------------

// function fib(num){
//   if(num <= 0) return 0;
//   if(num === 1) return 1;

//   return fib(num-1) + fib(num-2);
// }
// console.log(fib(8))

//---------------------------------------------------------------

// ex :-  f(n) = 4x2 + 3n + 5

// function solve(n){
//   return (4 * n ** 2) + (3 * n) + 5;
// }
// console.log(solve(1));

//---------------------------------------------------------------

// ex2 :- f(n) = 100 + 5n2 + √n

//Three codes are doing same work  but Time complexity different

// function solve2(n) {
//     return 100 + 5 * n ** 2 + Math.sqrt(n);
//   }    // O(1)

// console.log(solve2(10));

//----------

// function calculateF(n) {
//     return 100 + 5 * n * n + Math.sqrt(n);
//   }    // O(1)

// console.log(calculateF(10));

//-----------

// function T_complexity(n) {
//   let result = 100 + Math.sqrt(n); //Space Complexity O(1)
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += (5 / (n * n)) * (n * n);
//     }
//   } // Time Complexity O(n^2)
//   return result;
// }

// console.log(T_complexity(10));

//---------------------------------------------------------------

// function binarySearch(arr, target) {
//   let start = 0,
//     end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor(start + (end-start) / 2);
//     if (target > arr[mid]) {
//       start = mid + 1;
//     } else if (target < arr[mid]) {
//       end = mid - 1;
//     } else {
//       return mid;
//     }
//   }

//   return -1;
// }

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 0));

//---------------------------------------------------------------

// var isPalindrome = function (x) {
//   if (x < 0) return false;

//   let originalVal = x;
//   let rev = 0;

//   while (x > 0) {
//     let digit = x % 10;
//     rev = rev * 10 + digit;
//     x = Math.floor(x / 10);
//   }
//   if (rev === originalVal) return true;
//   else return false;
// };
// console.log(isPalindrome(10));














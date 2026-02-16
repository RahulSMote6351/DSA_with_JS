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

//---------------------------------------------------------------//

let n = 9474;

if (n > 0) {
  let old = n;
  let PowersSum = 0;
  let digit = n.toString().length;
  while (n > 0) {
    let temp = n % 10;
    PowersSum = PowersSum + temp ** digit;
    n = Math.floor(n / 10);
  }
  if (old === PowersSum) {
    console.log("The Number Is Armstrong No:-", old);
  } else {
    console.log("The Number Is Not Armstrong No:-", old);
  }
} else {
  console.log("Please enter the Valid Input");
} // 1 Armstrong Number List-9 , 153 , 370 , 371 , 407 , 1634 , 8208 , 9474 

//---------------------------------------------------------------






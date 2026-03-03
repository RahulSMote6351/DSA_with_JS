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

//---------------------------------------------------------------

// var romanToInt = function (s) {
//   const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;

//   for (let i = 0; i < s.length; i++) {
//     const current = map[s[i]];
//     const next = map[s[i + 1]];

//     if (current < next) {
//       total -= current;
//     } else {
//       total += current;
//     }
//   }

//   return total;
// };

// console.log(romanToInt("MCM"))

//---------------------------------------------------------------

// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;

//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
//   return nums1
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//---------------------------------------------------------------

// let str = "My Name is Rahul Mote and I am a Software Engineer";

// let ferquency = {};

// for(let index of str){
//     console.log(ferquency)
//     if(ferquency[index]){
//         ferquency[index] += 1;
//     }
//     else{
//         ferquency[index] = 1;
//     }
// }
// console.log(ferquency)
// Outout :-- {" ":10 ,"M":2,"y":1,"N":1,"a":6,"m":2,"e":5,"i":2,"s":1,"R":1,"h":1,"u":1,"l":1,"o":2,"t":2,"n":3,"d":1,"I":1,"S":1,"f":1,"w":1,"g":1}

//--------------------------------------------

// let str = "My Name is Rahul Mote";

// let rev = "";
// let word = "";

// for(let i=0; i<str.length; i++){
//     if(str[i] === " "){
//         rev = word + " " + rev;
//         word = "";
//     }
//     else{
//         word += str[i];
//     }
// }
// rev = word + " " + rev;

// console.log(rev)
// Output:-- "Mote Rahul is Name My"

//-----------------------------------------------

// let arr = [10 , 5 , 20 ,8];

// let max = arr[0];
// let secMax = -Infinity;

// for(let i=1; i<arr.length; i++){
//     if(arr[i] > max){
//         secMax = max;
//         max = arr[i];
//     }
//     else if(arr[i] > secMax && arr[i] !== max){
//         secMax = arr[i];
//     }
// }
// console.log("Max:-" , max);
// console.log("Second Max:-" , secMax);

//-----------------------------------------------

// let arr = [1,2,3,4,5,6,7];
// let k = 3;
// // output :-- [5,6,7,1,2,3,4]

// let result =  arr.slice(-k).concat(arr.slice(0,k));
// console.log(result)

//-----------------------------------------------

//-----------------------------Linked List------------------------------

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// console.log(head);

//-------------------------------
function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
console.log(printList(head));
//-------------------------------
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}
console.log(reverseList(head));
//-------------------------------
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
console.log(middleNode(head));
//-------------------------------
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}
console.log(hasCycle(head));
// -------------------------------
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(-1);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;

  return dummy.next;
}
console.log(mergeTwoLists(head, head.next));
//-------------------------------
function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}
console.log(removeNthFromEnd(head, 2));
//-------------------------------
function isPalindrome(head) {
  let slow = head,
    fast = head;

  // find middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // compare
  let left = head,
    right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}
console.log(isPalindrome(head));

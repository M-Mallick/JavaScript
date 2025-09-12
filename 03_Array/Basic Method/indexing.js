/*
           0  1  2  3  4  5
    arr = [1, 2, 3, 4, 5, 6]
          -6 -5 -4 -3 -2 -1  -> negative indices are not supported directly 
                                when accessing elements via square bracket 
                                notation (arr[-1]).
*/
let arr = [1, 2, 3, 4, 5, 6];

// Accessing from left to right by using indices
console.log(arr[3]);

// Accessing form right to left by using indices
// console.log(arr[-1]); o/p: undefine
console.log(arr.at(-1));
console.log(arr[arr.length - 2]);




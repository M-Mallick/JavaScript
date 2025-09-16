/* forEach() always returns undefined, 
   it does not create a new array. 
   If you need to create a new array 
   based on the original one, consider 
   using methods like map() or filter()
*/
arr = [1,2,3];

arr.forEach((item) => {
    item = item + 10; // updates the local copy of item 
    //  this does NOT update the original array arr
});
console.log(arr);

arr.forEach((item, index, arr) => {
    arr[index] = item + 10;
});

console.log(arr);

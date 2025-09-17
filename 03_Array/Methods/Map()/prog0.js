/*
    It is used to create a new array by applying a provided 
    callback function to each element of an existing array. 
    The original array remains unchanged.
*/
const numbers = [1, 2, 3, 4];

const numberCube = numbers.map(function(num) {
    return num ** 3;
})

console.log(numberCube);

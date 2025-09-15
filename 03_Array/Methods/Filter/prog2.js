// Without filter method
const numbers = [1,4,2,6,3,7,8,5,9];
const evenNumbers1 = [];
for(num of numbers) {
    if(num % 2 == 0) {
        evenNumbers1.push(num);
    }
}
console.log("First : "+evenNumbers1);

// with filter method
evenNumbers2 = numbers.filter( (i) => i % 2 == 0);
console.log("Second : "+evenNumbers2);

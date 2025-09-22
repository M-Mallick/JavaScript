/*
  > An arrow function is a shorter syntax for writing functions in JavaScript
  > They don’t have their own this. They inherit this from the surrounding context.
*/
// Regular Function
let a = function () {
  console.log("Hello R.F.");
}
a();

// Arrow Function
let a1 = () => {
  console.log("Hello A.F.");
}
a1();



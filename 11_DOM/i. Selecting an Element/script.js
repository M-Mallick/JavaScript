// Select the div element
var a = document.querySelector("div");
console.log(a);

// Select the element with class "heading" and change its inner HTML
var b = document.querySelector(".heading");
// b.innerHTML = "Hello";

console.log(b);

// Select the element with id "para1"
let c = document.querySelector("#para1");
console.log(c);

let list = document.querySelectorAll("ul > li");
console.log(list);
list.forEach(function(item) {
    console.log(item);
    
});

// let a = document.querySelectorAll(".box1 li");

let b = document.querySelectorAll(".box2 li");

// By using forEach method.
// b.forEach(function(item) {
//     item.style.color = "green";
// });
 // By using for loop.
for(let i=0; i < b.length; i++) {
    b[i].style.color = "blue";
}

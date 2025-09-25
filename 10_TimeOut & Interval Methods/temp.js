// Syntax : setInterval(function, timeOut);

console.log("Let's start --> ");

let id = setInterval(function(){console.log("Iteration By MM")}, 1000);//  Function
// setTimeout(() => {console.log("4th and last Iteration By MM")}, 9000); // Arrow Function

console.log("last ...");
clearInterval(id); // to stop

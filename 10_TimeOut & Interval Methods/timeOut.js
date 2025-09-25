// Syntax : setTimeOut(function, timeOut);

console.log("Let's start --> ");

setTimeout(function(){console.log("1st Iteration By MM")}, 3000); // Regular Function
setTimeout(function(){console.log("2nd Iteration By MM")}, 5000); // Regular Function
setTimeout(() => {console.log("3rd Iteration By MM")}, 7000); // Arrow Function
setTimeout(() => {console.log("4th and last Iteration By MM")}, 9000); // Arrow Function

console.log("last ...");


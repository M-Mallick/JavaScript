function multipleGreed(fun, count) {  //  Higher Order Function
  for (let i = 1; i <= count; i++) {
    fun(); // Call the function inside the loop
  }
}

let greed = function() {
  console.log("Hello, Mridu");
};

// Pass the function reference instead of calling it immediately
multipleGreed(greed, 10);

multipleGreed(function(){console.log("OK!");}, 10); 

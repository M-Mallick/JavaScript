a = 9;
b = 7.93;
c = true;
console.log(a,b,c);
console.log(a * b * false); // false = 0
console.log(a + b + c); // true = 1 and false = 0
/*
for + variable loos their data type and become String
for , variable maintain their data type
*/
console.log("Method1(in o/p everything is String) : "+a+" and "+b+" and "+c);
console.log("Method2(in o/p everything represent their type) : ", a ," and ", b ," and ",c);

console.log("Addition of "+a+" and "+b+" is(as a number) : ",(a+b));
console.log("Addition of "+a+" and "+b+" is(as a string) : "+(a+b));
console.log("Addition of "+a+" and "+b+" is(smple concatination) : "+ a + b);
console.log("Addition of "+a+" and "+b+" is(as a number) : ", a + b);

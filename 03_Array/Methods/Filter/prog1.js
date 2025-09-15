// Without filter method
const values = [10, null, 20, undefined, 30];
const validValues1 = [];
for(let i=0; i < values.length; i++) {
    if(values[i] != null && values[i] != undefined) {
        validValues1.push(values[i]);
    }
}

console.log("First : "+validValues1);

// with filter method
validValues2 = values.filter( (v) => v != null && v != undefined);
console.log("Second : "+validValues2);

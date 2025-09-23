const student = {
  name : "Mridu Mallick",
  age : 22,
  eng : 80,
  math : 90,
  phy : 95,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  }
}

student.getAvg();

function test() {
  console.log(this);  // In a function, the global object is the default binding for this.
}                     // In a browser window the global object is [object Window]
test();

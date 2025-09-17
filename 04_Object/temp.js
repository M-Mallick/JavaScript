const data = {
	name : "Adrima",
	age : 22,
	height : undefined,
	eatting : function (food) {
		// body...
		console.log(`I like ${food}`);
	}
}

console.log(data['name']);
console.log(data.age);
console.log(data.height);
data.eatting('Pizza');

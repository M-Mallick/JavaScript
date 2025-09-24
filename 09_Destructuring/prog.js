color = ['Red', 'Green', 'Blue'];
const [f] = color // index = 0
console.log(f);

const [,g] = color // index = 1
console.log(g);

const [,,b] = color // index = 2
console.log(b);

const [,,,u] = color
console.log(u);

const [firstColor, secondColor, thirdColor] = color;
console.log(`${firstColor} , ${secondColor}, ${thirdColor}`);

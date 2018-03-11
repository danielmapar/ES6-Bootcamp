let numbers = [1, 2, 3];
// We get copy of the values
let [first, second, third = 5, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(rest);


let a = 5;
let b = 10;

// Swapping values
[b, a] = [a, b];

console.log(a);
console.log(b);

let [c, , d] = numbers;
console.log('c: ', c);
console.log('d: ', d);

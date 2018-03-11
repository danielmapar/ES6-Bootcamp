let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');

console.log(symbol);
console.log(symbol === anotherSymbol);

let obj = {
  name: 'max',
  [symbol]: 22
};

console.log(obj);

let sharedSymbol = Symbol.for('age');
let sharedSymbol2 = Symbol.for('age');

console.log(sharedSymbol === sharedSymbol2);

let person = {
  name: 'Daniel'
};

function makeAge(person) {
  let ageSymbol = Symbol.for('age');
  person[ageSymbol] = 20;
}

makeAge(person);
console.log(person[sharedSymbol]);
person['age'] = 24;
console.log(person);

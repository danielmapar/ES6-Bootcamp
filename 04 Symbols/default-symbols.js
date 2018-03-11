class Person {
}

Person.prototype[Symbol.toStringTag] = 'Person -- Obj';

let person = new Person();

console.log(person);

// -----

let numbers = [1, 2, 3];

numbers[Symbol.toPrimitive] = function() {
  return 999;
}

console.log(numbers + 1)

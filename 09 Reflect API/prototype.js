class Person {
  constructor(name) {
    this.name = name;
  }
}

Person.prototype.age = 7;

let person = new Person('Daniel');

console.log(Reflect.getPrototypeOf(person))

console.log(Reflect.getPrototypeOf(person) === Person.prototype)
// same as
console.log(person.__proto__ === Person.prototype)

// Change the prototype

const newProto = {
  prototypeIsNew: true,
  greet() {
    console.log("Hello!");
  }
};
Reflect.setPrototypeOf(person, newProto);

console.log(Reflect.getPrototypeOf(person))
console.log(Reflect.getPrototypeOf(person) === newProto)

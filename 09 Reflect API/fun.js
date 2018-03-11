class Person {
  constructor(name) {
    this.name = name;
  }
}

const obj = {
  greet() {
    console.log(`${this.name}`)
  }
}

let person = new Person('Daniel');

// It sets the new prototype to obj, but it keeps the
// name property and everything associated to "this"
Reflect.setPrototypeOf(person, obj);

person.greet();

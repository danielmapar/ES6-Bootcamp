class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person('Daniel', 24);

console.log(person.name)
console.log(Reflect.get(person, 'name'))


class Person2 {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    return this._name = name;
  }
}

let person2 = new Person2('Daniel2', 23);

console.log(person2.name)
console.log(Reflect.get(person2, 'name'))
Reflect.set(person2, 'name', 'Anna')
console.log(Reflect.get(person2, 'name'))
// The third parameter is the 'this' key word
console.log(Reflect.get(person2, 'name', {_name: 'Not Daniel'}))
Reflect.set(person2, 'name', {_name: 'Overload'});
console.log(Reflect.get(person2, 'name'))
console.log(Reflect.has(person2, 'name'))

console.log(Reflect.ownKeys(person2))

class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this._name = value;
  }
}

let mum = {
  _name: 'Mum'
}

let person = new Person("Daniel", 24);


Reflect.defineProperty(person, 'hobbies', {
  writable: false,
  value: ['Sports', 'Cooking'],
  configurable: true // Change this configuration after the property has been created (default false)
})

person.hobbies = ['Daniel']

console.log(Reflect.ownKeys(person))
console.log(person.hobbies)

Reflect.deleteProperty(person, 'hobbies');

console.log(Reflect.ownKeys(person))

// Lock future object changes (same as Object.freeze)
Reflect.preventExtensions(person);

console.log(Reflect.isExtensible(person))

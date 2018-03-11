// Reflect API
// Bundle a bunch of Object related features

class Person {
  constructor(name) {
    this.name = name
  }
}

function TopObject() {
  this.age = 27;
}

// The constructor, the params for the constructor
let person = Reflect.construct(Person, ['Daniel'])
console.log(person)
// Same as new Person
console.log(person instanceof Person)

// TopObject will override the Person prototype
let person2 = Reflect.construct(Person, ['Daniel'], TopObject)
console.log('----------')
console.log(person2.__proto__ === Person.prototype)
console.log(person2.__proto__ === TopObject.prototype)

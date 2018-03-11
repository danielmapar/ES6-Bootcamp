class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(param) {
    console.log(param)
    console.log(`Hello I am ${this.name} - age ${this.age}`)
  }
}

let person = Reflect.construct(Person, ['Daniel', 24]);

person.greet();

Reflect.apply(person.greet, {name: 'Pedro', age: 21}, [24])
//Object.apply(person.greet, {name: 'Pedro', age: 21}, [24])

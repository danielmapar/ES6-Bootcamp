class Obj1 {
  constructor() {
    this.a = 1;
  }
}

class Obj2 {
  constructor() {
    this.b = 1;
  }
}

let obj1 = new Obj1();
let obj2 = new Obj2();

let obj = Object.assign(obj1, obj2);

console.log(obj)
console.log(obj instanceof Obj1)
// It uses the prototype of the object on the left of the assign function
console.log(obj.__proto__ === Obj1.prototype);

let newObj = Object.assign({}, obj1, obj2);
console.log(newObj)
console.log(newObj instanceof Object)
console.log(newObj.__proto__ === Object.prototype);

let person = {
  //name: 'Daniel'
}

let boss = {
  name: 'Anna'
}

console.log(person.__proto__ === Object.prototype)
Object.setPrototypeOf(person, boss);
console.log(person.__proto__ === boss)
console.log(person.name)

export class Person {
  constructor(name) {
    this.name = name;
    this._name = name;
  }

  greet() {
    console.log('Hello, my name is: ' + this.name);
  }

}

export class Max extends Person {
  // uses the parents constructor
}

export class MaxNew extends Person {
  constructor(age) {
    super('Max');
    this.age = age;
  }

  static staticMethod() {
    console.log('static');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value > 10) {
        this._name = value;
    }
  }

  originalGreet() {
    super.greet();
    super.greet();
  }

  greet() {
    console.log('Hello, my name is: ' + this.name + ' age ' + this.age);
  }
}


export class ConvertableArray extends Array {
  constructor(...items) {
    super(...items);

    this.constructor = ConvertableArray
    this.__proto__   = ConvertableArray.prototype
  }
  test() {
    let returnArray = [];
    this.forEach(value => returnArray.push('Converted!' + value));
    return returnArray;
  }

}

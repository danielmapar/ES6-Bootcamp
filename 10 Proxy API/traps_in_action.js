let person = {
  name: "Daniel",
  age: 24
};

// declare traps:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

let handler = {
  get: (target, name) => {
    return name in target ? target[name] : 'Non existent!'
  },
  set: (target, property, value) => {
    if (value > 20) {
      Reflect.set(target, property, value);
      //return target[property] = value;
    }
  }
};

var proxy = new Proxy(person, handler);

console.log(proxy.name);
console.log(proxy.age);

proxy.age = 10;

console.log(proxy.age);

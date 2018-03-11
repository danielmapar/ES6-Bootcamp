let person = {
  age: 24,
  name: "Daniel"
}

let handler = {
  get: function(target, name) {
    return name in target ? target[name] : "Non existent";
  }
}

var proxy = new Proxy({}, handler);

Reflect.setPrototypeOf(person, proxy);

console.log(person.name)
console.log(person.test)

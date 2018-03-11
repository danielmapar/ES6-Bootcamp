let obj = {
  name: 'Max',
  age: 27,
  greet() {
    return 'Greet';
  }
};

// greet: hello -> alias
let {name, age, greet: hello} = obj;
console.log(name, age, hello());

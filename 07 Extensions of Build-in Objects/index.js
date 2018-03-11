let obj1 = {
  a: 1
}

let obj2 = {
  b: 2
}

/*
The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
*/
let obj = Object.assign(obj1, obj2);

console.log(obj)

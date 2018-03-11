// A constant is defined once and should keep its value (obvious)

const test = "value";
// test = "something else"; // will fail

// We are holding pointers to this values
// Arrays and objects are reference types
// That means the const is holding a pointer. Having said that,
// we can change the actual value of the obj/array
const obj = {
  a: 10
}; 
const arr = [ 10 ];

obj.new = 20;
arr.push(20);

console.log("Object: ", obj);
console.log("Array: ", arr);

// List of unique values
// just objects
// No size property, because javascript will clean it up eventually

let obj = {
  a: 1
};

let obj2 = {
  b: 1
}

// Cleanup unused objects
let set = new WeakSet([obj, obj2, {c: 1}]);

console.log(set.has(obj))
console.log(set.has(obj2))
console.log(set.has({c: 1}))

set.delete(obj);

set.add({d: 1})

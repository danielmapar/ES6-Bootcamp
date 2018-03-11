let array = Array(5);

console.log(array);

let array2 = Array.of(5, 10, 20);

console.log(array2);

let array3 = Array.from(array2, (val) => {
  return val * 2;
})
console.log(array3);

array3.fill(100);

console.log(array3)

array3.fill(1, 1, 2)

console.log(array3)

console.log(array3.find(function(value) {
  return value === 1;
}));


let arr2 = [1, 2, 3]
arr2.copyWithin(1, 2);
console.log(arr2);

let it = arr2.entries();

for (let element of it) {
  console.log(element)
}

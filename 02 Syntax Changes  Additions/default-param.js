
function isEqualTo(compare1, compare2 = 10, compare3 = value, compare4 = compare1) {
  console.log(compare1)
  console.log(compare2)
  console.log(compare3)
  console.log(compare4)
  return compare1 === compare2 && compare1 === compare3 && compare1 === compare4;
}

let value = 10;

console.log(isEqualTo(10));
console.log(isEqualTo(3));

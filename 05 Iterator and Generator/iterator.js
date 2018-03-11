let array = [1, 2, 3];

console.log(typeof array[Symbol.iterator])

let it = array[Symbol.iterator]();

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

array[Symbol.iterator] = function() {
  return {
    next: function() {
      return {
        done: false,
        value: 10
      }
    }
  }
}

let it2 = array[Symbol.iterator]();

console.log(it2.next())

array[Symbol.iterator] = function() {
  let nextValue = 10;
  return {
    next: function() {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue
      }
    }
  }
}

it2 = array[Symbol.iterator]();

for (let element of array) {
  console.log('element: ', element)
}

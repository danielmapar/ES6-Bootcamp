function *select() {
  yield 'House';
  yield 'Garage';
}

let it = select();

console.log(it.next());
console.log(it.next());
console.log(it.next());


let obj = {
  [Symbol.iterator]: gen
};

function *gen() {
  yield 1;
  yield 2;
}

for (let element of obj) {
  console.log(element);
}


function *gen2(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch(e) {
      console.log(e);
    }
  }
}

let it3 = gen2(10);
console.log(it3.next())
console.log(it3.next())
console.log(it3.next())
console.log(it3.next())
console.log(it3.next())
console.log(it3.throw('Exception!!!'))

function *gen3() {
  let test = yield 10;
  console.log(test);
}

let it4 = gen3();
it4.next();
it4.next(10);

this.test = 10;

function fn() {
  // Normal functions will value this based on the context
  // In this case, it is using the left of the dot rule and it is putting
  // the object in evidence
  console.log("Original this: ", this);
}

var obj = {
    fn: fn,
    value: 10
};

obj.fn();

var fn2 = () => {
  // Arrow functions always set the "this parameter" based on the
  // lexical scope. That means, what your read is what will see under
  // execution
  console.log("Arrow function this: ", this);
}

var fn3 = () => console.log(`Arrow function this: ${JSON.stringify(this)}`)

obj.fn2 = fn2;
obj.fn3 = fn3;
obj.fn2();
obj.fn3();

setTimeout(obj.fn, 1000)
setTimeout(obj.fn2, 2000)
setTimeout(obj.fn3, 3000)

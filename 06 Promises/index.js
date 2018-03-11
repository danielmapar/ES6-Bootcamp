let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('Done! 1');
  }, 1000);
});

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('Done! 2');
  }, 1500);
});

Promise.all([promise, promise2]).then((output) => {
  console.log("all: ", output)
}).catch((error) => {
  console.log("error all: ", error)
})


// Whoever gets done first is returned as the output
Promise.race([promise, promise2]).then((output) => {
  console.log("race: ", output)
}).catch((error) => {
  console.log("error race: ", error)
})

/*promise.then(function(value) {
  console.log(value)
}, function(error) {
  console.log("Error: ", error)
})*/

promise.then(function(value) {
  console.log(value)
}).catch(function(error) {
  console.log("Error: ", error)
})

function waitASecond(seconds) {
  return new Promise(function(resolve, reject) {
    if (seconds > 2) {
      reject('Erro')
    } else {
      setTimeout(function() {
        seconds++;
        resolve(seconds)
      }, 1000);
    }
  });
}

waitASecond(10).
  then(waitASecond)
  .then(function(seconds) {
    console.log(seconds);
  }).catch((error) => {
    console.log("error wait a second: ", error)
  })

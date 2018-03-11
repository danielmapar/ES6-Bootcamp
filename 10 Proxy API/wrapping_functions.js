function log(message, second) {
  console.log('Log entry created, message: ' + message + second);
}

//log('Hello')

let handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(argumentsList)
    if (argumentsList.length === 2) {
      return Reflect.apply(target, thisArg, argumentsList);
    }
  }
}

let proxy = new Proxy(log, handler);

proxy('Hello', 10)

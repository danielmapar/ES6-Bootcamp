// This used to work because of Hosting


age = 27;
console.log(age);
var age;

// Let needs to be declared before initialization

let age2 = 1;
console.log(age2);


function test(val) {
  return globalLet * val * 2;
}

let globalLet = 1; // declared before being used
console.log("Test: ", test(1));

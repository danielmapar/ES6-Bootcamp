// Hosting is disabled using let
// let brings blocked statements, that means variables are bounded to a block 

if (true) {
  var test = 'value';
}

console.log("global: ", test);

if (true) {
  let test = 'value2';
  console.log("local: ", test);
}

console.log("global again: ", test);

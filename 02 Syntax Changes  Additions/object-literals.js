let name1 = 'John'
var ageField = "age";

let obj = {
  name: name1,
  [ageField]: 24,
  greet() {
    // Those are NOT arrow functions
    // Those are classical functions
    console.log("Name: ", this.name);
  },
  "val": '10',
  "method"() {
    console.log("String: ", this.val);
  },
  "method new"() {
    console.log("String: ", this.val);
  }
};
console.log(obj);
obj.greet()
obj.method();
obj["method new"]();

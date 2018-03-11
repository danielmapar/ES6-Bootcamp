'use strict';

var _module = require('./module');

var _module2 = _interopRequireDefault(_module);

var _class = require('./class');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(fun3());

var person = new _class.Person('Max');
//person.greet();

//console.log(person.__proto__ === Person.prototype)

var max = new _class.Max('Max');
//max.greet();

var maxNew = new _class.MaxNew(20);
//maxNew.greet();
//maxNew.originalGreet();

//console.log(maxNew.__proto__ === Person)
//console.log(maxNew.__proto__ === Max)
//console.log(maxNew.__proto__ === MaxNew.prototype)
//MaxNew.staticMethod();

//console.log("maxNew.__proto__: ", maxNew.__proto__.originalGreet())

var numberArray = new _class.ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log("numberArray: ", numberArray);

console.log(numberArray.test());
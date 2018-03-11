import Module, { fun3 } from './module';
import { Person, Max, MaxNew, ConvertableArray } from './class';


//console.log(fun3());

let person = new Person('Max');
//person.greet();

//console.log(person.__proto__ === Person.prototype)

let max = new Max('Max');
//max.greet();

let maxNew = new MaxNew(20);
//maxNew.greet();
//maxNew.originalGreet();

//console.log(maxNew.__proto__ === Person)
//console.log(maxNew.__proto__ === Max)
//console.log(maxNew.__proto__ === MaxNew.prototype)
//MaxNew.staticMethod();

//console.log("maxNew.__proto__: ", maxNew.__proto__.originalGreet())

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log("numberArray: ", numberArray)

console.log(numberArray.test())

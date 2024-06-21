//==============================================================nested function scope==============================================================//
function outer() {
  let x = 10;
  function inner() {
    let y = 20;
    console.log(x, y);
  }
  inner();
}
outer();
//==============================================================closure==============================================================//
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
//==============================================================curring function==============================================================//
function sum(a, b) {
  return a + b;
}
function curriedSum(func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
}
let curriedSum2 = curriedSum(sum);
console.log(curriedSum2(10)(20));

//==============================================================this keyword==============================================================//
let person = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log(this.name);
  },
};
person.sayHello();
//==============================================================call method==============================================================//
function saymyname() {
  console.log(this.name);
}
saymyname.call(person);
////===============================================================new keyword constructor==============================================================//
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person2 = new Person("John", 30);
console.log(person2);
//===============================================================globalThis==============================================================//
globalThis.name = "John";
console.log(globalThis.name);

//===============================================================prototype=====================================================//
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
let person1 = new Person("menna", "mohamed");
person1.getName = function () {
  return this.firstName;
};
console.log(person1.fullName());
let person3 = new Person("menna", "abdelbaset");
// console.log(person3.getName()); //error as we have specified the function getName to person1 object
//==============================================================Prototype inheritance==============================================================//
function Superhero(fname, lname) {
  Person.call(this, fname, lname);
  this.isSuper = true;
}
//to get access on person funcitons
Superhero.prototype = Object.create(Person.prototype);

let superman = new Superhero("menna", "mohamed");
console.log(superman.fullName());
console.log(superman.isSuper);
//===============================================================Classes=====================================================//
class PersonClass {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  //instead of prototype in functions we can use methods
  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }
}
const person4 = new PersonClass("menna", "mohamed");
person4.fullName();
class SuperheroClass extends PersonClass {
  constructor(fname, lname) {
    super(fname, lname); // to invoke the constructor of the parent class
    this.isSuper = true;
  }
}
const batman = new SuperheroClass("Bruce", "wayne");
batman.fullName();
console.log(batman.isSuper);
//===============================================================iteraator============================================================//
const obj = {
  [Symbol.iterator]: function () {
    let i = 0;
    const iterator = {
      next: function () {
        if (i < 10) {
          return { value: i++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
    return iterator;
  },
};
for (const num of obj) {
  console.log(num);
}
//===============================================================Generators============================================================//
//the generator function is not a normal function as it pause the execution of the function and returns an iterator
//The yield keyword is used to define the values that the generator function will produce
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = generatorFunction();
for (const num of generator) {
  console.log(num);
}
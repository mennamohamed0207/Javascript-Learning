//==============================================================nested function scope==============================================================//
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x ,y);
    }
    inner();
}
outer();
//==============================================================closure==============================================================//
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
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
    return function(a) {
        return function(b) {
            return func(a,b)
        }
    }
}
let curriedSum2 = curriedSum(sum);
console.log(curriedSum2(10)(20));

//==============================================================this keyword==============================================================//
let person = {
    name: "John",
    age: 30,
    sayHello: function() {
        console.log(this.name);
    }
}
person.sayHello();
//==============================================================call method//==============================================================//
function saymyname() {
    console.log(this.name);
}
saymyname.call(person)
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
function Person(fname,lname)
{
    this.firstName=fname;
    this.lastName=lname;
}
Person.prototype.fullName=function()
{
    return this.firstName+" "+this.lastName;
}
let person1=new Person("menna","mohamed");
person1.getName=function()
{
    return this.firstName
}
console.log(person1.fullName());
let person3=new Person("menna","abdelbaset");
// console.log(person3.getName()); //error as we have specified the function getName to person1 object 



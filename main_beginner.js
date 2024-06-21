//this is main.js
console.log("Hello World from main.js");
//Variables
//using let to declare variable and can be changed
let a = 10;
let b = 20;
let c = a + b;
console.log(c);
//using const for variable and cannot be changed
const d = 30;
console.log(d);
//if you don't assign a value to a variable it will be undefined
// you can assign the undefined value to a variable
// you can assign the null value to a variable
let e;
console.log(e);
let f = null;
console.log(f);

//String can have single or double quotes or backtick
let name = "John";
let message2='menna'
let message = `Hello, ${name}!`;
console.log(message);
//Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);
//Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
//Object
let obj = { name: "John", age: 30 };
console.log(obj);
console.log(obj.name);
console.log(obj.age);
//you can assign the variable to multiple data types
let x = 10;
x="menna"
console.log(x);
//operators
// + - * / % ** ++ --
//exapmle
 x = 10;
let y = 20;
let z = x + y;
console.log(z);
// += -= *= /= %= **= ++= --=
// == === != !==
//=== like == but it compares the value and type
// > < >= <=
// && || !
//we can use + to concatenate strings
//ternary operator
// var=condition ? true : false
let result = x > y ? "x is greater than y" : "x is less than y";
console.log(result);    
//types conversion
// implicit conversion
console.log(10 + "20");                // 1020
console.log("10" - 20);               // -10
console.log("menna" + " mohamed");    //menna mohamed
console.log("menna" - " mohamed");    //NaN
// true = 1
// false = 0
//null = 0
console.log(true + true);     // 2
console.log(true + false);    // 1
console.log(false + true);    // 1
console.log(false + false);   // 0  
console.log(undefined+false);   //NaN

//explicit conversion
let num = Number("10"); //equivalent to parseInt("10") and there is also parseFloat
let str = String(10);  //equivalent to (10).toString()
console.log((10).toString() + " this is to string function")
let boo = Boolean(0); //null,0,"" and undefined are converted to false and everything else is true
console.log(num);
console.log(str);
console.log(boo);
//equality
let num1 = 10;
let num2 = 10;
let num3 = 20;
console.log(num1 == num2); //true
console.log(num1 === num3); //false

//Conditions
let age = 18;
if (age >= 18) {
    console.log("you are allowed to vote");
} else {
    console.log("you are not allowed to vote");
}

//switch    
let grade = "A";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    default:
        console.log("Not good");
}
//loops
//for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//while
 i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
//do while
 i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
//for of
console.log("for of");
let arr2 = [1, 2, 3, 4, 5];
for (let num of arr2) {
    console.log(num);
}
//for in
let obj2 = { name: "John", age: 30 };
for (let prop in obj2) {
    console.log(prop); // name and age
    console.log(obj2[prop]); // John and 30
}   
//functions
function add(a, b) {
    return a + b;
}
let result2 = add(10, 20);
console.log(result2);
//arrow functions
let add2 = (a, b) => a + b;
let add3 = (a, b) => { return a + b };
let result3 = add2(10, 20);
let result4 = add3(10, 20);
console.log(result3);
//Scopes
let x1 = 10;
if (true) {
    let x1 = 20;
    console.log(x1); // 20
}
console.log(x1); // 10

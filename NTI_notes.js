//=================================================differnce between var and let
//difference betweeen var and const
//hosting :when you use variable using var and log it before it is declared it will not produce no error
//but when using var it will produce an error as the area before it is declared called temperory dead zone
console.log(x);
var x=10;

// console.log(y);
// let y=10;    // will produce error as y is not defined

//we can declare variable not using any keyword

x=1;
console.log(x); //will not produce an error
var x;
//console.log(x); //1


//================================================function declaration

greet();
function greet(){
    console.log("Hello World");
}


//but when make the funciton in variable 

// greet2(); will produce an error as greet2 is not defined
const greet2 = function(){
    console.log("Hello World");
}

//==================================================map function
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers);

//==================================================filter function

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
//==================================================reduce function
let init=0; //initial value for the total(Accumlator)
let sum = numbers.reduce(function(total, number) {
  return total + number;
},init); 
console.log(sum);
//===================================================Self invoking function
//may be used to separate the scopes of variables
(function() {
  console.log("Hello World");
})();

//there is recursion in javascript
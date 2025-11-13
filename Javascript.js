// Function Declaration and expression

const { get } = require("http");

//1. Factorial: Write a function declaration and a function expression that compute the factorial of a number. Call both before and after their definitions. Observe the behavior.

//Solution : 

function factorialDelaration(n){
  if (n < 0 ){
    return "You can't compute factorial for number less than 0";
  } else if (n === 0 ){
    return 1;
  } else{
    return n * factorialDelaration(n - 1);
  }
}

// console.log("Result of Declaration func", factorialDelaration(4)); 


// expression
let fac = function(n){
  if (n < 0 ){
    return "You can't compute factorial for number less than 0";
  } else if (n === 0){
    return 1;
  }else {
    return n* fac(n-1)
  }

}

// console.log("Result of Expression func", fac(4));


//Arrow function

let factorial = (n) => {
  if (n < 0 ){
    return "You can't compute factorial for number less than 0";
  }
  else if (n === 0){
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log("Result of Arrow func", factorial(4));

//nested function

function sayHiBye(firstName, lastName){
  function getFullName(){
    return firstName + " " + lastName;
  }

  console.log("Hello, "+ getFullName())
  console.log("Bye, "+ getFullName());
  return "";

}

// console.log(sayHiBye("John", "Doe"));


function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

// console.log( counter.up() ); // ?
// console.log( counter.up() ); // ?
// console.log( counter.down() ); // ?



//Lexical Environment and Closure

function sum(a) {
  return function(b){
    return a + b;
  }

 
}

 console.log(sum(4)(5));
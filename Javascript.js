// Function Declaration and expression

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

console.log("Result of Declaration func", factorialDelaration(4)); 


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

console.log("Result of Expression func", fac(4));
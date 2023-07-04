// a function is a reusable block of code
// the syntax of a function is
function functionName(name) {
   // function body/statements
}

// example: non parametarised function
//there are no parameters in the function declaration
function add(){
    console.log(2+3)
}
add();//function invocation i.e we are calling it so that we can use it

// example: parametarised function
// function 
function subtract(a,b){
    console.log(a-b)
}
subtract(23,3)

//THE RETURN KEY WORD
//it exposes the defined function
function multiply(x,y,t){
    return (x*y*t) 
}
console.log(multiply(12,3,8))

function divide(l,p){
    let result = l/p
    return result
}
divide(
console.log(divide(25,5))
//console.log(divide(34,0))
//the 2nd argument is missing, so the engine ends up givingan undefined result so it will returnNan
)

function salutation(){
    console.log("I love you!")
}
salutation()

//VARIABLE SCOPE
//Local variables
//this ia a variable that has limited scope(accessed in a function where it is declared)
//a global variable is a variable that can be accessed outside any function

//local variables example
function multiply(){
    let localVariable1 = 6;
    let localVariable2 = 3;
    let product = localVariable1*localVariable2;
    return product
}
console.log(multiply())

// function addition({
//     let addedValue = localVariable1 + localVariable2;
//     return addedValue
// })
//console.log(addition())

//global variables example
let globalVariable1 = 6;
let globalVariable2 = 6;
function division() {
    let result1 = globalVariable1/globalVariable2
    return result1
}
console.log(division())

//arrow functions

const sum = (a,b) =>{
    return a+b
}
console.log(sum(22,11))

const sum2 = (a,b) => a+b
// consise way of writing an arrow function that one line of code in the body

//example 2
const sum3 = (a,b) =>{
  let result = (a+b)  
  return `The result is  ${result} per the calculation`
}
console.log(sum3(3,1))
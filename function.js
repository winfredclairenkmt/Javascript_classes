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
)

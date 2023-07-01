// an operator is a symbol that usually represents an action or process
//e.g let sum = 10+20
// = this is an assignment operator
//+ , this is an arithmetic operator(addition)

//list of operators 
//arithmetic operators
//comparison operators
//logicv operators
//asgnment operators
//type operators
//bit wise operators

//1.Arithmetic operators include
//+ addition
//- subtraction
//* multiplication
//\division
// % modulus(remainder of division)
// ** exponential
// ++ increment
// -- decrement

//these symbols work on vallues, let Z = 6+2
// 6 and 2 are called operands, operands are values ion which the operator works

//Addition

let x = 74;
let y = 23;
let result1 = x+y;
console.log(result1)

 let result2 = y-x;
 console.log(result2)

 let result3 = x*y;
 console.log(result3)

let result4 = x%y;
console.log(result4)

let result5 = x**y;
console.log(result5)

//exponantial
let k = 5
let r = 2
let result = k**r
console.log(result)
 //Icrement
 var keith = 3;
//post increment, here you increace a variables value after an action
let result6= 2 + keith++
console.log(keith)
console.log(result6)

//pre increament
var monica = 10;
let result9 = 5 + ++monica
console.log(result9)

//this increases the value before dealing  with the action
//decrement
var claire = 7
let result10 = 3 + claire--
console.log(result10)

let result11 = 9 + --claire
console.log(result11)

//increment by more tnan 1
let cats = 87;
cats += 3
//this is the same as cats = cats+3
console.log(cats)

//assignment operators
// 1. assign
//e.g
let Cathy = 65

//2. =+ add and assign  e,g
var Damian = 34;
Damian += 6
console.log(Damian)

//3. -= sub and assign
var Gilly = 100;
Gilly -=4
console.log(Gilly)

//4. *= multiply and assign
var Yale =78;
Yale *= 0

//5. /= divide and assign
Yale /= 6
console.log(Yale)

//5 %= modulus and assign
Gilly %= 8

//6. **= exponentioal and assign
 var Tina = 20
 Tina **= 10

 //comparison operators
 var chain = 20
 var chain2 = 30
 var chain3 = "30"
 let chain4 = 20

 //1. ==equal to
 console.log(chain == chain2)
 console.log(chain2 == chain3)
 console.log(typeof chain)
console.log(typeof chain2)
console.log(typeof chain3)

//2. === strict equal (both data and data type)
console.log(chain2 === chain3)  

//3. != not equal to (!negation)
console.log(chain != chain4)
console.log(chain2 != chain3)

//4. !== strict not equal(not equal value and type)
console.log(chain !== chain4)
console.log(chain2 !== chain3)

//5. greater than >
console.log(chain > chain2)

//6. < less than
console.log(chain2 < chain4 )

//7. >=greater than or equal
console.log(chain >= chain4)

//8.<= less or equal 
console.log(chain<= chain2)

//9. ? termary operator
/*Ternary operator is like if_then_else_  
it tajes three arguments
condition? value if true : value if false*/

//let Captain = "Hook"
//let Woman = "Angelica"
//let Solution = "If he is cheating on her,Amputation follows suit" ?
 
let age = 15
let answer = age > 18 ? "you can have a national ID" : "You arent eligible for a national ID"
console.log(answer)

//logical operators
let dota = true
let dota2 =true
let dota3 =false
let dota4 = false

//1.&& logical and 
//returns true if both conditions are true
console.log(dota && dota2)
console.log(dota && dota3)

// true and true  result is true
//true and false result is false
//false and false result is false
//false and true result is false

//2.||  logical or  returns true if any of the values is tru(IF)
console.log(dota || dota2)
console.log(dota || dota3)

// true and true  result is true
//true and false result is TRUse
//false and false result is false
//false and true result is TRUe

//3. !!- LOGICAL NOT
//THIS WILL RETURN TRUE IF THE condition is false and vice versa
console.log(! dota)
console.log(! dota3)

//type operators
// in javascript there are two type operators ie
// typeof and instanceof
// typeof returns the data type of a variable
//instanceof  returns true if an object is an instance of an object type. 
// the instanceof operatorat returns a boolean value that indicates that an object is an instance of a particular class

let names = "McKenzie"
let namber = 90
console.log(typeof names)
console.log(typeof namber)
console.log(typeof true)
console.log(typeof NaN)
console.log(typeof [1,2,3,])
console.log(typeof {Lastname: "Namata", Age: 26, Destination: "Oklahoma" })
console.log(typeof null)
console.log(typeof function(){})
console.log(typeof Geraldino)

//instance of 
let drinkname = new String("Mojito")
let num1 = new Number(123)
console.log(drinkname instanceof String)
console.log(num1 instanceof Number)
//read about bitwise operators

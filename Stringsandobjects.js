//there are a number of operations available for strings.
// converting a string to upper or lower case 
//removing specified characters
//determinig the length or characters of a string
// checking the alpahbetical ordering of string values
// removing leading or trailing values 
//extracting the first or last n characters from a string

//1. Declaration
let string1 = "going to school"

// 2. Escape sequences
let escape1 = ("he said, 'her name is Claire'")
let escape2 = ("he said, \"her name is Claire\"")
let escape3 =  ('he said,\'her name is Claire\'')
console.log(escape1)
console.log(escape2)
console.log(escape3)

//3. Concatanation
let string2 = "extraction 1 was the first"
let string3 = "extraction 2 is the sequel"
console.log(string2 + " and " + string3)

//4.string literals
// declare a variable and assign it a string
let string4 = "I am wonderfully and fearfully made"
console.log(string4)

//5. String interpolation
// this is a handy way to merge javascript expressions with strings
//the basic syntax is 
//`something ${expression} something`
let age = 24;
console.log(`Allen is ${age} years old`)
console.log("Allen is", age ,"years old")

//6.string methods
//a.string length
//the length property returns the length of  string
let mystring = "God's grace abides by us all"
console.log(mystring.length)

//b) extracting parts of a string
console.log(mystring.slice(5,11))

//c) slice method(start,end)
// slice extracts a part of the string and returns the extracted part in a new string
//the method takes two parameters i.e start position and end position

console.log(mystring.substring(3,9))

//data type inversion
let num1 = 4
let num2 = "9"
console.log(num1+num2)
console.log(num1+ Number(num2))

let num3 = 67
let num4 = 13

console.log(num3+num4)
console.log(num3+ String(num4))

//Objects
// objects store a number of key value pairs
// each item in the collection has a name that we call a key and an associated value
let person = {Firstname:"Nakamatte", age:23, Hobbies:["reading novels","watching movies","journaling"]}

//accessing properties of an object
//dot notation;
console.log(person.age)
console.log(person.Hobbies)
//bracket notation
console.log(person["age"])
console.log(person["Hobbies"])
console .log("Nakamatte is" + person.age + " years old and her hobies are" +person.Hobbies )

//add properties to an object
person.height = "187cm"
console.log(person)
person["gender"] = "female"
console.log(person)

//deleting properties of an object
//delete removes the key value pair from the object and returns true
//unless it cannot delete i.e if the property is non configurable
console.log(delete person.age)
console.log(delete person["height"])
console.log(person)

//object immutability
//we cannot change assignment to a constant variable
//const declaration prohibits cahnging what thing the constant points to but it doesnot prohibit changing the content of another thing
//thus we can change a property in a constant object but we cant change which object the const points to

const myObject = {surname:"Nakamatte", Firstname:"Winfred", bloodtype:"A+" }
 console.log(myObject)
 myObject.game = "Basketball"
 myObject.sign = "pisces"
 console.log(myObject)

 //object freeze
 //the object.freeze method is used to freeze an object
 //freezing an object doesnt allow new properties to be added to the object and prevents removing or altering the properties
 //object.freeze preserves the enumarability,configurabilty,utilability and prototype of the object

 const myObject2 = Object.freeze({opposition:"PP" , Rulers:"NRM" , others:"DP"})
console.log(myObject2)
myObject2.class = "Python"
console.log(myObject2)
myObject2.opposition = "Mbabazi"
console.log(myObject2)
//assignment
//create two string variables
//create two number variables
//use concatination of a string
//use escape characters
//create two objects with two properties each one should be a constant and another a frozen object and add two objects to both

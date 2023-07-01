//arrays
//store multiple values in a single variable

let number =[1,2,3,4,5]
console.log(number)
let alpha = ["apples","strawberries","jackfruit"]
console.log(alpha)

 let cars = new Array ("Mercedes","Escalade","Volvo","Jaguar")
 console.log(cars)
 //printing out a particular car from thia array
 console.log(cars[1])

 cars[1] = "G-Wargon"
 console.log(cars)
 console.log(cars[1])
 
 alpha.push("Kitaferia")
 console.log(alpha)
 console.log(alpha.length)

 //array methods
 //the pop method
 //it removes the last element from the array
 alpha.pop() 
 console.log(alpha)

 //the shift method
 //it removes the first element from the array
 alpha.shift() 
 console.log(alpha)

 //the unshift method
 //it adds a new element to the beginning of the array
 alpha.unshift("Banana") 
 console.log(alpha)

 //the sort method
 //it sorts the array alphabetically
 alpha.sort() 
 console.log(alpha)

 //the reverse method
 //it reverses the order of the array
 alpha.reverse() 
 console.log(alpha)

 //the join method
 //it joins the elements of an array into a string
 let string = alpha.join(" ") 
 console.log("................",string )

 //delete an item from the array
 //deletes the element at the specified index but doesnot delete the index
 console.log(cars) 
 delete cars [1]
console.log(cars) 

cars[1] = "Rollsroyce"
console.log(cars)

//splice method
//it removes element from to the specified indices
cars.splice(1,2)
console.log(cars)

cars.splice(2,0,"Jeep","IST")
console.log(cars)

//slice method
let newcars = cars.slice(1,3)
console.log(newcars)

//concat method
let evenNumbers = [2,4,6,8,10]
let oddNumbers = [1,3,5,7,9]
let primeNumbers = [2,3,5,7]
 let allNumbers = evenNumbers.concat(oddNumbers, primeNumbers)
 console.log(allNumbers)

 //nested arrays or multidimensional arrays
 //arrays in arrays
 let hobbies =[["swimming",1],["running",2],["reading novels",6],["sight seeing","the winner",["playing chess",3]]]
 console.log(hobbies)
 //print out first item from second sub array
 console.log(hobbies[1])

 console.log(hobbies[1][0])
 console.log(hobbies[3][1])
 // to print chess
 console.log(hobbies[3][2][0])

 //remove elements from a sub array
 hobbies[1].pop()
 console.log(hobbies)

 hobbies[3].push("Extraction 2")
 console.log(hobbies)

 hobbies.splice(0,1)
 console.log(hobbies)

 //adding a sub array
 console.log("this is the beginning of some other exp", hobbies)
 hobbies.splice(1,0,["dancing",3])
 console.log(hobbies)
 
 let myHobbies =[["swimming",1],["running",2],["reading novels",6],["sight seeing","the winner"]]
myHobbies.forEach((string)=>{
    string.pop(1)
})
console.log(myHobbies)

//flatten array
//when we flatten the array, the suba rrays are removed leaving one array
let tabby =[["swimming",1],["running",2],["reading novels",6],["sight seeing","the winner"]]
const mcKenzie = tabby.flat()
console.log(mcKenzie)
  
 

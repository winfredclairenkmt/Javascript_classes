// a class is a blueprint of an object 
// a class will always have its name is singular

// syntax of a class
class ClassName{
    constructor(name){
        this.name = name;
    }
}

//example of
//a class always has a constructor which is called whenever a class is instantiated or an object of the class is created.
class Employee{
constructor(employeename,id,gender,strength,education){
         this.employeename = employeename;
         this.id = id;
         this.gender = gender;
         this.strength = strength;
         this.education = education;
        }
}

// an object is an instance of a class
// creating a new instance
let emp1 = new Employee("Cami",101,"female","Character building","Diploma in BA");  
let emp2 = new Employee("Damain",102,"male","Team work","Degree in Science & Technology");
console.log(emp1);
console.log(emp2);
//using dot and braccket notation to extract one object from the class
console.log(emp1.employeename);
console.log(emp2.employeename);

console.log(emp1["education"])
console.log(emp2["education"])


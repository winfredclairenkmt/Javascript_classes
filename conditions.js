//if statements
//if else statement
//if else if statement
//the syntax of an if statement
//if (){}
//if(expression){
  //  statements to be excuted if expression is true

//}
// else {statement to be executed if expression is false}
//example
let weather = "Rainy";
if (weather == "shining"){
    console.log("we go swimming")
}else{
    console.log("stay in the house and watch a movie")
}

//if else
let age = 23;
if (age>18){
    console.log("you are eligible to get a driving licence")
} else if(age == 18){
    console.log("you just became eligible to get a driving license")
}else{
    console.log("you are not eligible to get a driving licence")
}

// terneray operator
// condition ? printed statement if condition is true: printed statement if condition is false
let weather2 = "cloudy"
let cloudy = "carry your jacket"
let shiny ="wear light cloths"
console.log(weather2 == "cloudy"? cloudy:shiny)

//switch statement
//eaxamples
let startRating = 4;
switch(startRating){
    case 1:
        console.log("Very bad");
        break;
    case 2:
        console.log("Bad");
        break;
    case 3:
        console.log("Average");
        break;
    case 4:
        console.log("Good");
        break;
    case 5:
       console.log("Excellent");
       break;     
    default:
        console.log("Please enter a valid number between one and five")   

}

//example 2
let car ="harrier"
switch (car){
    case "Mercedes":
        console.log("Your go to for beauty")
        break;
    case "Porsche":
        console.log("Your ultimate sports thingi")
        break;
    case "Escalade":
        console.log("Luxury SUV") 
        break;   
    case "Jaguar":
        console.log("Sleek and suave")    
        break;
    case "Rollsroyce":
        console.log("Fancieest of them all") 
        break;
    default:
        console.log("make research before coming, don't just come fwaaaa")        
}

//example 3
switch (new Date().getDay()) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("Look at your calendar, my dear.");
  }

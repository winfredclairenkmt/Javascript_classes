 //create five if statements
// create five switch cases
 //create a switch case for arrAYS

 //1. SWITCH CASE
 // Example One (water sports)
 let watersports = "Raft";
 switch (watersports) {
    case "Surfing":
        console.log("This is riding a wave")        
        break;
    case "Swimming":
        console.log("This is moving under water using one's body.")
        break;
    case "Fishing":
        console.log("This is pulling fish from the water body") 
        break;
    case "Rafting":
        console.log("This is riding a wave on a raft.")
        break;
    default:
        console.log("Please pick a water Sport")
        break;
 }

 //Example Two (snacks)
 let snacks = "Gorillos";
 switch (snacks) {
    case "kernels":
        console.log("Hard")
        break;
    case "crisps":
        console.log("could either be cassava or potato ")
        break;
    case "Gorillos":
        console.log("they are a bit puffy") 
        break;   
    default:
        console.log("sweet Corn is the way to go")
        break;
 }
 
//Example 3 (teachers)
let badTeacher = "ben"
switch(badTeacher){
    case "ben":
        console.log("Ben is a bad teacher")
        break;
    case "trudy":
        console.log("the teacher with lugambo!")
        break;
    case "Paul":
        console.log("the computer guy")
        break;
    case "Solomon":
        console.log("The chemistry Messiah")
        break;
    default:
        console.log("She/he is a member of staff.")
        break;            
}

//example four (drugs)
let analgesics = "Morphine"
switch (analgesics) {
    case "codeine":
        console.log("Painkiller")
        break;
    case "fentanyl":
        console.log("kills pain")
        break;
    case "Methadone":
        console.log("its mildly sedative.")
        break;

    default:
        console.log("Only analgesics available.")   
        break;
}

//example five novels
let authors = "Ana Huang"
switch (authors) {
    case "J.K Rowling":
        console.log("The Harry Potter Series")
        break;
    case "Dan Brown":
        console.log("The Robert Langdon Stories")    
        break;
    case "Danielle Steele":
        console.log("Fictional romance is her specialty.")    
        break;
    case "Veronica Roth":
        console.log("The divergent series")
        break;
    case "Sarah. J. Maas":
        console.log("The court of glass series")
        break;        
    default:
        console.log("Ana Huang is lit")
        break;
}

//SWTCH CASES FOR ARRAYS
//TRIAL ONE
let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  switch (fruits[i]) {
    case "Peach":
      console.log("These may be extinct in Uganda.");
      break;
    case "Dragon fruit":
      console.log("Typically underrated gift of mother nature");
      break;
    case "Strawberry":
      console.log("A red polka dotted berry that doesnt taste the way it looks.");
      break;
    default:
      console.log("No available description.");
  }
}

//TRIAL TWO
var myArray = ["peas", "soya", "nuts", "raisins"];

for (var i = 0; i < myArray.length; i++) {
  switch (myArray[i]) {
    case "peas":
      console.log("Found peas!");
      break;
    case "soya":
      console.log("Found soya!");
      break;
    case "nuts":
      console.log("Found nuts!");
      break;
    case "raisins":
      console.log("Found raisins!");
      break;
    default:
      console.log("Unknown item found");
      break;
     }
}

//TRIAL THREE
var myArray = ["pants", "dress", "skirt", "shirt", "short"];

for (var i = 0; i < myArray.length; i++) {
  switch (myArray[i]) {
    case "pants":
      console.log("He wore pants.");
      break;
    case "dress":
      console.log("She wore a dress.");
      break;
    case "skirt":
      console.log("She wore a  skirt.");
      break;
    case "shirt":
      console.log("She owns a shirt.");
      break;
    case "short":
      console.log("She picked a short");
      break;
    default:
      console.log("Unknown item found");
  }
}

//TRIAL FOUR
var cars = ["bentley", "mercedes", "escalade", "jaguar", "g-wargon"];

for (var i = 0; i < cars.length; i++) {
  switch (cars[i]) {
    case "bently":
      console.log("A Bentley");
      break;
    case "mercedes":
      console.log("A Mercedes");
      break;
    case "escalade":
      console.log("An Escalade");
      break;
    case "jaguar":
      console.log("A Jaguar");
      break;
    case "g-wargon":
      console.log("The G-Wargon");
      break;
    default:
      console.log("Unknown item found");
  }
}

//TRIAL FIVE(with concatination)
var continents = ["Africa", "Asia", "Europe", "Antarctica"];
var cases = ["Uganda", "China", "USA", "Northpole"];

for (var i = 0; i < cases.length; i++) {
  switch (cases[i]) {
    case "Uganda":
      console.log("Uganda is located in " + continents[0]);
      break;
    case "China":
      console.log("China is located in " + continents[1]);
      break;
    case "USA":
      console.log("USA is located in " + continents[2]);
      break;
    case "Northpole":
      console.log("The North Pole is located in " + continents[3]);
      break;
    default:
      console.log("Learn how to utilize your Atlas");
  }
}




//IF STATEMENTS
//TRIAL ONE
var temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) {
  console.log("It's warm outside!");
} else {
  console.log("It's cool outside!");
}

//TRIAL TWO
var dehydration = "severe";

if (dehydration = "mild") {
  console.log("You are experiencing mild dehydration. Remember to drink water.");
} else if (dehydration = "severe") {
  console.log("You are experiencing severe dehydration. Seek medical attention immediately.");
} else {
  console.log("Unknown dehydration level. Please consult a healthcare professional.");
}


//TRIAL FOUR
var gender = "male";

if (gender == "female") {
  console.log("Welcome, Madam!");
} else {
  console.log("Welcome, Sir!");
}

//TRIAL FIVE
var bible = "oldTestament";

if (bible = "newTestament") {
  console.log("This is the New Testament.");
} else {
  console.log("Invalid input.");
}



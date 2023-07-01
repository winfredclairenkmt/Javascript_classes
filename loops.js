//for loops
//while loops
//do while loops

//for loops
// for (initialisation; condition; increment){
    //body
    //}

    let studentNumber;
    for(studentNumber = 1; studentNumber <10; studentNumber+=2){
        console.log("value of student number is " +studentNumber);
    }

    let oddNumbers;
    for(oddNumbers = 1; oddNumbers <=10; oddNumbers+=2){
        console.log("oddNumbers are:" + oddNumbers)
}

//for of__ the loop
//it allows you to iterate over itrable objects (arrays ,sets, maps, strings etc)
//syntax is 
//for(element of iterable){
   // body of for of
    // example 


    const stringA =  "Camel"
    for (let i of stringA){
        console.log(i)
    }
    let fruits = [{"apples":10},{"grapes":6},{"berries":8},{"bananas":4}];
    for (fruit of fruits){
        console.log(fruit)
    }
    
    //for__in  loops
    // the for in loop allows you to iterate over all the property keys of an object
    for (fruit in fruits){
        console.log(fruits[fruit])
    }
    
    //example
    const stringH = "refactory"
    for( i in stringH){
        console.log(stringH[i])
    }
    
    //while loops
    let counter = 0
    while (counter <= 10){
    console.log("Counter is= "+ counter)
     counter++
    }
    
    //do-while loop
    //there is an execution even when the condition is false
    //normally not used because of the loop-hole it will have.
    let counter2 = -3;
    do{
     counter2--
     console.log("Value of counter is = " + counter2   )
    }while(counter2 >= 0)

   
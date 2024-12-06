// We CAN call a tradition function BEFORE the initialization
// We CAN'T call an arrow function BEFORE the initialization
// We CAN't use the variables BEFORE the initialization

myFunc();
//myArrowFunc();
//console.log(constVar, letVar, varVar);


function myFunc(){
    console.log("Tradition function");
}

let myArrowFunc = () => {
    console.log("This is an arrow func");
}


const constVar = 5;
let letVar = 5;
var varVar = 5;
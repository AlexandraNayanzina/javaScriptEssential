/* Closure is a function that remembers the variables from
its outer scope even after that scope has finished executing.
*/
// Example 1
// function outerFunction(){
//     const outerVar = "I am from the outer function";
//
//     function innerFunction(){
//         console.log(outerVar);
//     }
//     return innerFunction;
// }
//
// const closure = outerFunction();
// closure();


// Example 2
let myName = "Alex";

function printName(){
    console.log(myName);
}

// printName();
myName = "NewName";
// printName() // NewName


// Example 3
function outerFunc(outerVar){
    return function innerFunc(innerVar){
        console.log("The inner variable: " + innerVar + "\n");
        console.log("The outer variable: " + outerVar);
    };
}


const newFunc = outerFunc("outerVar");
newFunc("innerVar")

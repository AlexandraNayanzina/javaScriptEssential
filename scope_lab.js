// Global scope
var globalVar = "I am a global variable";
let globalLet = "I am a global variable but scoped with let";
const globalConst = "I am a global constant";


{
// Block scope
var blockVar = "I am a block-scoped variable";
let blockLet = "I am a block-scoped let";
const blockConst = "I am a block-scoped constant";

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
}

// Function scope

function show(){
    var functionVar = "I am a function-scoped var";
    var functionLet = "I am a function-scoped Let";
    var functionConst = "I am a function-scoped constant";
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}
show();



console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

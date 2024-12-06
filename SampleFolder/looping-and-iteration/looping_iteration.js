// for (let i = 1; i<= 5; i++) {
//     console.log(i);
// }

// "While" loop - Fibonacci sequence
console.log("Fibonacci number using while loop");
let limit = 50;
let a = 0;
let b = 1;
while(a < limit) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

//


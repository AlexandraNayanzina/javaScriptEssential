/*
- reduces array to a single value
- applies a function to each element
- useful for aggregation
*/

const prices = [10, 15, 20];
let sum = prices.reduce((accumelator, nextPrice) => accumelator + nextPrice)

console.log(`The total amount is: ${sum}`);
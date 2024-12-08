/* Push method
- adds one or more elements to the end of an array
- returns new length
*/
const fruits = ["apple", "banana"];
console.log("Initial array: ", fruits);
console.log("Push method returns the length: " + fruits.push("orange"));
console.log("Fruits are after the push(): ", fruits);

/* Pop method
- removes the last element
- returns removed element
*/
const removedLastFruit = fruits.pop();
console.log("Removed (with pop() method) fruit is: ", removedLastFruit);
console.log("Fruits are after the pop(): ", fruits);

/* Shift method
- removes the first element
- returns removed element
*/
const removedFirstFruit = fruits.shift();
console.log("Removed (with shift() method) fruit is", removedFirstFruit);
console.log("Fruits are after shift()", fruits);

/* Unshift method
- adds one or more elements at the beginning
- returns new length
*/
console.log("Unshift() method returns new length", fruits.unshift("strawberry", "cherry"));
console.log("Fruits after unshift() method", fruits);

/* Splice method
- changes content of array
- removes, replaces, adds elements
- modifies the original array
- returns an array of deleted elements
array.splice(start, deleteCount, item1, item1, ...);
start (required) - the index at which to start modifying the array
deleteCount (optional) - the number of elements to remove from an array starting from the start index
item1, item2, ... (optional) - the elements to add to the array starting from the start index.
*/
console.log("Deleted fruits after splice(1, 1, 'grape') method", fruits.splice(1, 1, "grape"));
console.log("Fruit array after splice()", fruits);
console.log("Deleted fruits after splice(1, 0, 'melon') method", fruits.splice(1, 0, "melon"));
console.log("Fruit array after splice()", fruits);

/* Concat method
- combines two or more arrays
- modifies an original array
*/
const additionFruits = ["mango", "kiwi"];
console.log("Combined fruits are: ", fruits.concat(additionFruits));

/* Slice method
- returns a copy of a portion of an array
- does NOT modify the original array
- returns an array consists the part of an original array
*/
console.log("Sliced fruits are: ", fruits.slice(1, 3));
console.log("The original array is: ", fruits);

/* IndexOf method
- finds the index of the specified element
- returns first occurrence of element
- returns -1 if could not find element
*/

console.log("Looking for a 'banana', the index is: ", fruits.indexOf("banana"));

/* Reverse method
- reverses the order of elements in the array
- returns the reversed array
- reverses the array in place - modifies the original array
*/
console.log("Reversed array is: ", fruits.reverse());

/* Sort method
- returns sorted array
- by default, converts elements to a string and sorts elements alphabetically
- sort numbers by providing a comparison function
*/
const myNumbersAray = [2, 5, 7, 4]
console.log("Sort the fruits by names", fruits.sort());
console.log("Sort the myNumbersAray by numbers", myNumbersAray.sort((a, b) => a-b));

/* Length method
- returns the number of elements
- can resize the array (truncate or extend)
*/
console.log("The array length is: ", fruits.length);
fruits.length = 2;
console.log("Truncated array: ", fruits);
fruits.length = 10;
console.log("Extended array: ", fruits);

// Iterate through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
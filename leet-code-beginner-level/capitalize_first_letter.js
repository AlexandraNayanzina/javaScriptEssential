// Need to make capital the first letter of every word in the string
/* Example
Input: 'today is Friday' -> 'Today Is Friday'
 */

const str = 'today is Friday';

// Solution 1
function capitalize1(str) {
    let newStr = [];
    newStr = str.split(' ')
        .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase())
            .join(' ');
    return newStr;
}
// Solution 2
function capitalize2(str) {
    const words = str.split(' ');
    let result = [];
    for(let word of words){
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(' ');
}

// Solution 3
function capitalize3(str) {
    const words = str.split(' ');
    let newArray = words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    return newArray;
}

console.log(capitalize1(str));
console.log(capitalize2(str));
console.log(capitalize3(str));
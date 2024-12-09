/* Given a string, return a new string with the reversed order of the characters
Example:
"Hello" -> "olleH"
*/

// Solution1
function reverse1(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
    }
    return reversed;
}

// Solution2
function reverse2(str) {
    let reversed = '';

    for (let char of str){
        reversed = char + reversed;
    }
    return reversed;
}

// Solution3
function reverse3(str) {
    return str.split('').reverse().join('');
}
console.log(reverse1('Hello'));
console.log(reverse2('Hello'));
console.log(reverse3('Hello'));

// Reverse a Number
// Solution1
function reverseNumber1(num){
    reversed = '';
    reversed = num.toString().split("").reverse().join("");
    if (num >= 0) {
        reversed = reversed * 1;

    } else {
        reversed = reversed * -1;
    }
    return parseInt(reversed);
}

// Reverse a Number
// Solution2
function reverseNumber2(num){
    return num.toString().split("").reverse().join("") * Math.sign(num);

}

console.log(reverseNumber1(123));
console.log(reverseNumber2(123));
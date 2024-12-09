// Return true if the string is palindrome
// Return false if the string is not a palindrome

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    // let isPalindrome = reversed === str ? true: false
    // return isPalindrome;
    return str === reversed;
}

console.log(isPalindrome('madame'));
console.log(isPalindrome('madam'));
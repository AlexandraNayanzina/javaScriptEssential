// Given a string, return a character that is most commonly used in the string
/*
Example:
"hellllo" -> output: 'l'
*
*/

function maxChar(str){
/*
* objectOfCharsFromString = {
* h: 1,
* e: 1,
* l: 4,
* o: 1
}
*/
    const charMap = {};

    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if (charMap[char]){
            charMap[char] ++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let key in charMap){
        if(charMap[key] > max){
            max = charMap[key];
            maxChar = key;
        }
    }
    return maxChar;
}

console.log(maxChar("helllllo"));
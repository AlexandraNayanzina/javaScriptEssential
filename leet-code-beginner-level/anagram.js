/*
* Check if two provided strings are anagrams
An anagram is a word or phrase formed by rearranging the letters of another word o phrase.
Spaces and punctuations are not considered.
THe capital letters are considered as lower case letters
* */

function anagram1(str1, str2){
    // Step 1. Clear spaces and punctuation in both strings
    // Step 2. Create a charMap object which contains key - chars; values - number of chars in the string
    // Step 3. Check the length of both charMaps
    // Step 4. Compare the key in both charMaps

    let clearStr1 = str1.replace(/[\W]/g, '').toLowerCase();
    let clearStr2 = str2.replace(/[\W]/g, '').toLowerCase();

    let charMap1 = createCharMap(clearStr1);
    let charMap2 = createCharMap(clearStr2);

    if(Object.keys(charMap1).length !== Object.keys(charMap2).length) return false;

    for (let key in charMap1){
        if(charMap1[key] !== charMap2[key]) return false;
    }
    return true;
}

function createCharMap(str){
    let charMap = {};
    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    return charMap;
}

console.log(anagram1('coding m', 'M coding'));
console.log(anagram1('coding mt', 'mu coding'));

function anagram2(str1, str2){
    // Step1. Clear the spaces and punctuation, get the array from str
    // Ste2. Sort the array
    // Step3 Compare two arrays

    let clearedStr1 = str1.replace(/[\W]/g,'').toLowerCase().split('').sort().join('');
    let clearedStr2 = str2.replace(/[\W]/g,'').toLowerCase().split('').sort().join('');

    const result = clearedStr1 === clearedStr2 ? true: false;
    return result;

}

console.log(anagram2('coding m', 'M coding'));
console.log(anagram2('coding mt', 'mu coding'));
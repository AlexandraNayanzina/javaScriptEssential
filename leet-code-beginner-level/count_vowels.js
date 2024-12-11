/*
Find the number of vowels in the given string
*/

const str = 'Hellouu';
const vowels = ['a', 'e', 'i', 'o', 'u']

function numberOfVowels1(str){
    // Step1. Create an array from given string
    // Step2. Iterate over the array and add to the number if the vowel is found

    let num = 0;

    for(let char of str){
        if(vowels.includes(char)){
            num++;
        }
    }
    return num;
}

console.log(numberOfVowels1(str));

function countVowels(str){
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length: 0;

}

console.log(countVowels(str));
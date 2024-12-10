myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
size = 2;

function chunkArr(arr, size){
    let result = [];
    let index = 0;
    while(index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }
     return result;

}

console.log(chunkArr(myArray, size));
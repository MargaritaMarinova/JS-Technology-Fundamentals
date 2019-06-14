/*
You will be given an array of integer numbers on the first line of the input (space-separated). 
Remove all repeating elements from the array. 
Print the result elements separated by single space.
*/

function distinctArray(arr){

let resultArray = [];

for (let element of arr) {
    if(!resultArray.includes(element)){
        resultArray.push(element);
    }
    
}
console.log(resultArray.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
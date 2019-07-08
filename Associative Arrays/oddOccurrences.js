/*
Write a function that extracts all the elements of a sentence odd number of 
times. (case-insensitive). The input comes as a single string. 
The words will be separated by a single space.
*/

function oddOccurrences(input) {
    let map = new Map();
    let list = input.split(' ').map(e => e.toLowerCase());

    for (let word of list) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    let result = "";
    for (let [key, value] of map) {
        if (value % 2 !== 0) {
            result += key + " ";
        }
    }
    console.log(result);
}

 oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
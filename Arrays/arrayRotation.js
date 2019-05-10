/*
Write a JS function that receives an array and number of rotations you have to perform 
(first element goes at the end) Print the resulting array.
*/

function arrayRotation(arr, num){
    let currentElement;
    for (let i = num; i > 0; i--){
        currentElement = arr.shift();
        arr.push(currentElement);
    }
    console.log(arr.join (" "));
}

//test the result
arrayRotation([51, 47, 32, 61, 21],2);
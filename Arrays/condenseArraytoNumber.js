/* 
Write a program to receive an array of numbers and condense them by summing adjacent couples of elements 
until a single number is obtained. For example, if we have 3 elements {2, 10, 3}, 
we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, 
then we sum again all adjacent elements and obtain {12+13} = {25}. 
*/

function condenseArrayToNumber(arr) {
    let condensedArr = [];

    while (arr.length > 1) {
        for (let i = 0; i < arr.length-1; i++) {

            condensedArr.push(arr[i] + arr[i+1]);
        }
    
        arr = condensedArr.slice();
        condensedArr = [];
    }

    console.log(arr[0]);


}

//test the result
condenseArrayToNumber([2,10,3]);
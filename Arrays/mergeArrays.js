/*
Write a JS function which receives two arrays and merges them into a third array.  If the index of the element is even, 
add into the third array the sum of both elements at that index. If the index of the element is odd, 
add the concatenation of both elements at that index.
As input you will receive two string arrays.
As output you should print the resulting third array, each element separated by "  -  "
*/

function mergeArrays(firstArr, secondArr) {
    let resultArr = [];
    let newElement = 0;

    for (let i=0; i < firstArr.length; i++){
        if (i % 2 !== 0) {
            resultArr.push(firstArr[i]+secondArr[i]);
        } else {
            firstArr[i] = Number(firstArr[i]);
            secondArr[i] = Number(secondArr[i]);
            result = firstArr[i] + secondArr[i];
            resultArr.push(result);
        }
    }
    console.log(resultArr.join (" - "));
}

//test the result
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
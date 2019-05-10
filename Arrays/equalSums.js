/*
Write a JS function that determines if there exists an element in the array such that the sum of the elements 
on its left is equal to the sum of the elements on its right. If there are no elements to the left / right, 
their sum is considered to be 0. Print the index that satisfies the required condition or "no" if there is no such index.
*/

function equalSums(arr){
let hasEqual = false;

    for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
        for (let j = i-1; j >= 0; j--) {
        leftSum +=arr[j];
        }
        for (let j = i+1; j<arr.length; j++) {
        rightSum += arr[j];
        }
        if (leftSum === rightSum) {
        console.log(i);
        hasEqual = true;
        }
    }
    if(hasEqual===false) {
    console.log("no");
    }
}

//test the result
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
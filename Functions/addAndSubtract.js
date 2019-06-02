/*
You will receive three integer numbers. 
Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third integer from the result.
*/

function addAndSubtract (first, second, last){

    function sum(a, b){
        return first + second;
    }

    function subtract(a,b){
        return a-b;
    }
    let sumResult = sum(first, second);
    let finalResult = subtract(sumResult, last);

    console.log(finalResult);

}

addAndSubtract(23,6,10);

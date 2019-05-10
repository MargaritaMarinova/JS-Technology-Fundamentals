/*
Write a JS function, which changes the value of odd and even numbers in an array of numbers. 
If the number is even add to its value its index position. If the number is odd subtract to its value its index position. 
On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
on the third line print the sum of numbers from the modified array.
*/

function addOrSubtract(arr){
    let resultArr = [];
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultArr.push(arr[i]+i);
        } else {
            resultArr.push(arr[i]-i);
        }
    }
        

    function sumOfElements(someArr) {
        let sum = 0;
        for (let i=0; i< someArr.length; i++) {
            sum += someArr[i];
        }
    console.log(sum);
    }

    console.log(resultArr);
    sumOfElements(arr);
    sumOfElements(resultArr);
}

//test the result
addOrSubtract([5, 15, 23, 56, 35]);

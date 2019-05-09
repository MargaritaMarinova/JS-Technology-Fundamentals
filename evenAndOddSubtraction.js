// Write a program that calculates the difference between 
// the sum of the even and the sum of the odd numbers in an array.

function evenOddSubtraction (arr) {
    let evenSum = 0;
    let oddSum = 0;
    let difference = 0;

    for (let i = 0; i< arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    difference = evenSum - oddSum;
    console.log (difference);

}

evenOddSubtraction ([3,5,7,9]);
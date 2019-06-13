/*

Write a JS function that receive a number and return if this number is perfect or not.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
That is the sum of its positive divisors excluding the number itself (also known as its aliquot
sum).
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself) =&gt; 6 is a perfect number, because it is the sum of 1 + 2 + 3 (all of which are
divided without residue).

*/

function perfectNumber(num){
    let sumOfDivisors = 0;

    for(let i = 0; i< num; i++){
        if(num % i === 0){
            sumOfDivisors +=i;
        }
    }

    if (num === sumOfDivisors){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

}
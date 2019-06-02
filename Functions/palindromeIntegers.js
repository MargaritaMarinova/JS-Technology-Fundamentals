/*
A palindrome is a number which reads the same backward as forward, such as 323 or 1001. 
Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.
*/

function palindromeInteger(arr){
    for (let i=0; i< arr.length; i++) {
        let current = arr[i];
        let reversed = Number(current.toString().split('').reverse().join(''));

        let isPalindrome = (a,b) => a===b;

        console.log(isPalindrome(current, reversed));
        
    }

}


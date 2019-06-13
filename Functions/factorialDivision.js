/*

Write a JS Function that reaceives two integer numbers. Calculate factorial of each number.
Divide the first result by the second and print the division formatted to the second decimal
point.
*/

function factorialDivision(first, second){

    function factorialCalculation(num){
         let sum = 1;
         for (let i = 1; i<= num; i++){
             sum *= i;
         }
         return(sum);
    }
    let firstSum = factorialCalculation(first);
    let secondSum = factorialCalculation(second);
    let result = firstSum/secondSum;
    console.log(result.toFixed(2));
    
}
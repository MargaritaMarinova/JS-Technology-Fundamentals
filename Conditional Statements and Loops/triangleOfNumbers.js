/*
Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
*/

function triangleOfNumbers(num){
    let result=[];
    for(let i=1; i<= num; i++){
        for(let j=1; j<=i; j++){
            result.push(i);
        }
        console.log(result.join (' '));
        result=[];
    }

}

triangleOfNumbers(5);
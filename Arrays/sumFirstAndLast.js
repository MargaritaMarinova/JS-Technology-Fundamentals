// Write a function that receives an array of strings 
// and prints the sum of first and last element in that array

function sumFirstAndLast(input){
    let first = Number(input.shift());
    let second = Number(input.pop());
    console.log(first+second);

}

sumFirstAndLast(['20', '30', '40']);
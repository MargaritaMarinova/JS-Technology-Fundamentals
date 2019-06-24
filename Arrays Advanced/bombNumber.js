/*
Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
The output is the sum of the remaining elements in the sequence.
*/

function bombNumber(sequence, bomb){
    let remainingSum = 0;
    let bombNumber = bomb[0];
    let bombPower = bomb[1];
    
    for(let i = 0; i< sequence.length; i++){
        let current = sequence[i];
        if(current===bombNumber){
            let start = Math.max(0, i-bombPower);
            let end = bombPower *2+1;
            sequence.splice(start,end);
            i = i - bombPower -1;
                           
            }
    }
    for(let element of sequence){
        remainingSum += element;
    }
   console.log(remainingSum);

}

bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);
/*
Write a function to display numbers from given start to given end and their sum. The input comes as two number parameters.
*/

function printAndSum(firstNum, secondNum){
    let sum=0;
    let result=[];

    for (let i=firstNum; i<=secondNum; i++){
        result.push(i);
        sum +=i;

    }
    console.log(result.join(' '));
    console.log(`Sum: ${sum}`);

}

printAndSum(5,10);
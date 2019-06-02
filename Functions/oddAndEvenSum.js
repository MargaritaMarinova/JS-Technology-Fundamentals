/*
You will receive a single number. 
You have to write a function, that returns the sum of all even and all odd digits from that number. 
*/

function oddAndEvenSum(number){
    let newArr = number.toString().split('').map(Number);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i< newArr.length; i++){
        let current = newArr[i];
        if (current % 2 === 0){
            evenSum +=current;
        } else {
            oddSum +=current;
        }

    }

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


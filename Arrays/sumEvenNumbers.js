/*
Receive an array of strings 
parse them to numbers and sum only the even numbers.
*/

function sumEvenNumbers(inpArr){
    let sum = 0;
    let currentElement = 0;
    for (let i = 0; i<= inpArr.length-1; i++) {
        currentElement = Number(inpArr[i]);
        if (currentElement % 2 === 0) {
            sum += currentElement;
        }

    }
    console.log(sum);

}

//test the result
sumEvenNumbers(['1','2','3','4','5','6']);


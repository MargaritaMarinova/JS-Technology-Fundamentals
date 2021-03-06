/* 
Receive two string arrays and print on the console whether they are identical or not. 
Arrays are identical if their elements are equal. If the arrays are identical 
find the sum of the first one and print on the console following message: 
'Arrays are identical. Sum: {sum}', otherwise find the first index where the arrays 
differ and print on the console following message:
 'Arrays are not identical. Found difference at {index} index'. 
 */

function equalArrays(arr1, arr2) {
    convertToNumber(arr1);
    convertToNumber(arr2);
    
    let areEqual = true;
    let sum = 0;

    for (let i = 0; i< arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else if (arr1.length !== arr2.length) {
            areEqual = false;
        } else {
            sum += arr1[i];
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

    function convertToNumber(arr) {
        for (let j=0; j< arr.length; j++) {
            arr[j] = Number(arr[j]);
        }
    }

}

//test the result
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);


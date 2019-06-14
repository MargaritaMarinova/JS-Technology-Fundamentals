/*
Write a function that sorts an array of numbers so that the first element is the biggest one, 
the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.
*/

function sorting(arr){
    let resultArray = [];
    arr = arr.sort((a,b)=>b-a);
    while (arr.length>1){
        let smallestNumber = arr.pop();
        let biggestNumber = arr.shift();
        resultArray.push(biggestNumber);
        resultArray.push(smallestNumber);
    }
    resultArray.push(arr);

console.log(resultArray.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);


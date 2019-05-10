/*
Write a JS function to find all the top integers in an array. 
A top integer is an integer which is bigger than all the elements to its right. Print all top integers on the console.
*/

function maxNumber(arr){
    let result = [];
    
    for (let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        let isBigger = true;

            for (let j = i+1; j < arr.length; j++) {
                if (currentElement <= arr[j]) {
                isBigger = false;
                break;
                }
            }
        
        if(isBigger){
        result.push(currentElement);
        }
    }
    console.log(result.join (" "));
}

//test the result
maxNumber([1,4,3,2]);
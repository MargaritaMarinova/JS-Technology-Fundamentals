/*
You will receive two arrays of integers. The second array is contains exactly three numbers. 
First number represents the number of elements you have to take from the first array (starting from the first one).
Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
Third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
*/

function searchForANumber(arr,criteria){
    let result = arr.slice(0, criteria[0]).splice(criteria[1]);
    let counter = 0;

    for(let element of result){
        if(element===criteria[2]){
            counter++;
           }
    }
    
 console.log(`Number ${criteria[2]} occurs ${counter} times.`);
    
   
}

searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);
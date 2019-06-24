/*
Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as array of strings.
The output is the ordered array of strings.
*/

function sortArrayByTwoCriteria(arr){
    arr=arr.sort((a,b)=>{
    return a.length-b.length || a.localeCompare(b);
    }).forEach(element => console.log(element));
}

sortArrayByTwoCriteria(["alpha", "beta", "gamma"]);
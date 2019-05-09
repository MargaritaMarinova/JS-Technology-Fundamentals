/* Receive an array of strings (space separated values), reverse it 
and print its elements. Swap elements. For example 
the first element should be last and the last element 
should be first etc. */

function reverseAnArrayofStrings(inpArr){

    let newArr = [];

    for (let i = inpArr.length-1; i>=0; i--) {
        newArr.push(inpArr[i]);
    }
    console.log(newArr.join (' '));
}

reverseAnArrayofStrings (['a', 'b', 'c', 'd', 'e']);
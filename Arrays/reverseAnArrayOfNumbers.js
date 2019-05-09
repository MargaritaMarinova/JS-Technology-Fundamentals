/* Receive a number n and an array of elements, 
create a new array with n numbers, reverse it 
and print its elements on a single line, space-separated. */

function reverseAnArrayOfNumbers(n, inpArr) {

    let newArr=[];

    for (let i = n-1; i>=0; i--) {
        newArr.push(inpArr[i]);
    }
    console.log(newArr.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
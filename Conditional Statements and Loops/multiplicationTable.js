/* 
You will receive a number as an input from the console. Print the 10 times table for this number. See the examples below for more information.
Output
Print every row of the table in the following format:
{number} X {times} = {product}
*/

function multiplicationTable(num){

    for(let i=1; i<=10; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }

}

multiplicationTable(5);
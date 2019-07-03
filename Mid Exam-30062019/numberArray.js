/*
Create a program that helps you keep track of a number array. First, you are going to receive the numbers оn a single line, 
separated by space, in the following format:
"{number1} {number2} {number3}… {numbern}"
Then you will start receiving commands until you read the "End" message. There are five possible commands:
•	"Switch {index}"
o	Find the number on this index in your collection, if the index exists, and switch its sign (negative <-> positive).  
•	"Change {index} {value}"
o	Replace the number on the given index with the number given, if the index exists.
•	"Sum Negative"
o	Print the sum of all negative numbers.
•	"Sum Positive"
o	Print the sum of all positive numbers.
•	"Sum All"
o	Print the sum of all numbers.
In the end, print the positive numbers on a single line, keeping in mind that 0 is positive, 
separated by a single space in the following format:
"{number1} {number2} {number3}… {numbern}"
Input
•	On the 1st line you are going to receive the numbers of the array (always integers), separated by a single space.
•	On the next lines, until the "End" command is received, you will be receiving commands.
Output
•	Print the tasks in the format described above.
*/


function numberArray(input) {
    let numbers = input.shift().split(' ').map(Number);
    let sumNegative = 0;
    let sumPositive = 0;

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        let command = current[0];
        let value = +current[1];


        if (command === 'End') {
            break;
        }
        switch (command) {
            case 'Switch':
                if (value < numbers.length && value >= 0) {
                    let newNum = numbers[value];
                    if (newNum < 0) {
                        newNum = Math.abs(newNum);
                    } else {
                        newNum = newNum - newNum * 2;
                    }

                    numbers.splice(value, 1, newNum);
                }
                break;
            case 'Change':
                let index = +current[1];
                let newValue = +current[2];
                if (index <= numbers.length) {
                    numbers[index] = newValue;
                }
                break;
            case 'Sum':
                let additional = current[1];
                if (additional === 'Negative') {
                    for (j = 0; j < numbers.length; j++) {
                        if (numbers[j] < 0) {
                            sumNegative += numbers[j]
                        }
                    }
                    console.log(sumNegative);

                } else if (additional === 'Positive') {
                    for (k = 0; k < numbers.length; k++) {
                        if (numbers[k] >= 0) {
                            sumPositive += numbers[k];
                        }
                    }
                    console.log(sumPositive);

                } else if (additional === 'All') {
                    let sumAll = numbers.reduce((a, b) => a + b)
                    console.log(sumAll);
                }

                break;
        }


    }
    numbers = numbers.filter((x) => x >= 0);
    console.log(numbers.join(' '));

}

numberArray([ '1 2 3 4 5 4 3 2 1 0',
'Switch -4',
'Change 13 0',
'Switch 0',
'Sum All',
'End' ]);
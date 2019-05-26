/*
Write a function that receives 3 parameters: a number, an operator (string) and another number. 
Print the result of the calculation on the console formatted to the second decimal point.
*/

function calculator(num1, operator, num2){
    let result = 0;

    switch(operator){
        case "+": result = num1+num2; break;
        case "-": result = num1-num2; break;
        case "*": result = num1*num2; break;
        case "/": result = num1/num2; break;
    }
    console.log(result.toFixed(2));
    
}

calculator(5,'+',10);
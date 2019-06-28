/*
The George`s Cooking factory got another order. But this time you are tasked to bake 
the best Bread for a special party.
Until you receive a command "Bake it!" you will be receiving strings, the batches of bread. 
Each string is an array of numbers, split by "#". Each element is a bread and the number represent its quality.
You should select the batch with the highest total quality of bread.
If there are several batches with same total quality select the batch with the greater average quality.
If there are several batches with same total quality and average quality, take the one with the fewest elements (length).
Input / Constraints
•	Until you receive a command "Bake it!" you will be receiving strings, the batches of bread. 
Each string is an array of numbers, split by "#". Each element is a bread and the number represent its quality.
•	Each batch will have from 1 to 10 elements.
•	Bread quality is an integer in the range [-100, 100].
Output
•	After you receive the last command "Bake It!" you should print the following message:
"Best Batch quality: {bestTotalQuality}"
"{bread batch, joined by space}"
*/

function solve(batches) {
    batches.pop();
    let bestBatch = [Number.MIN_SAFE_INTEGER];  

    for (let batch of batches) {    
        let currentBatch = batch.split('#').map(Number);    
        let foundBetterBatch = false; 

        if (sum(bestBatch) < sum(currentBatch)) {   
            foundBetterBatch = true;                
        } else if (sum(bestBatch) === sum(currentBatch)) {    
            if (average(bestBatch) < average(currentBatch)) { 
                foundBetterBatch = true;
            } else if (average(bestBatch) === average(currentBatch) &&  
                bestBatch.length > currentBatch.length) {               
                foundBetterBatch = true;
            }
        }

        if (foundBetterBatch) {                 
            bestBatch = currentBatch.slice();   
        }
    }

    console.log(`Best Batch quality: ${sum(bestBatch)}\n${bestBatch.join(' ')}`); 


    function sum(arr) { 
        return arr.reduce((a, b) => a + b, 0); 
    }

    function average(arr) {
        return sum(arr) / arr.length; 
    }
}

//cookingFactory([ '5#4#10#-2', '10#5#2#3#2', 'Bake It!' ]);
cookingFactory([ '5#3#2', '10#2#-2#1#-1', '10', 'Bake It!']);
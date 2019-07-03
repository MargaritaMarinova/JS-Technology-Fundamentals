/*
Create a program that calculates what percentage you’ve travelled. First, you will receive how many steps you’ve made.
 Then, you will receive how long 1 step is in centimeters. Last, you will receive the distance you need to travel in meters.
Then you have to calculate what distance you have travelled with the steps given. Have in mind that every fifth step 
is 30% shorter than usual. You have to calculate what percentage of the distance you’ve travelled.
In the end, print the percentage of the distance travelled, formatted to the 2nd decimal place, in the following format:
"You travelled {percentage}% of the distance!"
Input
•	On the 1st line you will receive the steps made – an integer number in the range [0…100000]
•	On the 2nd line you will receive the length of 1 step – a real number in the range [0.0…50.0]
•	On the 3rd line you will receive the distance you need to travel – an integer number in the range [0…100000]
Output
•	In the end print the percentage of the distance travelled formatted to the 2nd decimal place in the format described above.
Constraints
•	The input will always be in the right format.
•	Percentage can be over 100%.
*/



function distanceCalculator(input){
    let steps = Number(input.shift());
    let stepInCm = Number(input.shift());
    let fifthStep = stepInCm-(stepInCm*0.3);
    let distanceinMeters = Number(input.shift());
    let distanceInCm = distanceinMeters*100;
    let allFifthSteps = Math.floor(steps/5);
    
    let regularSteps = Math.floor(steps-allFifthSteps);
    
    let realDistance = (regularSteps*stepInCm)+(allFifthSteps*fifthStep);
    let percentageTravelled = 0;
    if(realDistance >0 && distanceInCm>0){
    percentageTravelled = (realDistance/distanceInCm)*100;
    }
    console.log(`You travelled ${percentageTravelled.toFixed(2)}% of the distance!`);
}

//distanceCalculator([ '150', '0.5', '0' ]);
distanceCalculator([ '4587', '7.5', '500' ]);
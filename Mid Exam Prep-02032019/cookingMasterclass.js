/*
George is starting his own course, a Cooking Masterclass. So, he asked you to buy the needed items. 
The number of items depends on how many students will sign up for the course. 
The educational set for one student consists of 1 package of flour, 10 eggs and an apron. 
You will be given George`s budget, the number of students signed and the prices of each item. 
You have to help George calculate if the budget is enough to buy all of the items, or how much more money he needs. 
Because the aprons get dirty often, George should buy 20% more, rounded up to the next integer. 
Also, every fifth package of flour is free. 
Input / Constraints
The input data will consist of exactly 5 lines:
•	budget – floating-point number in range [0.00…1,000.00]
•	students – integer in range [0…100]
•	price of flour for a package – floating-point number in range [0.00…100.00]
•	price of egg for a single egg – floating-point number in range [0.00…100.00]
•	price of apron for a single apron – floating-point number in range [0.00…100.00]
The input data will always be valid. There is no need to check it explicitly. 
* If you are using JavaScript, you receive the input as an array with 5 elements: [budget, students, flour, egg, apron]
Output
The output should be printed on the console.
•	If the calculated price of the items is less or equal to the budget:
o	"Items purchased for {the cost of the items}$."
•	If the calculated price is more than the budget:
o	 "{neededMoney}$ more needed."
•	All prices must be rounded to two digits after the decimal point.
*/

function cookingMasterclass(input){
    let budget = input[0];
    let students = input[1];
    let priceFlour = input[2];
    let priceOneEgg = input[3];
    let priceApron = input[4];
    let freePackagesFlour = Math.floor(students/5)*priceFlour;
    let studentsTotal = (priceFlour*students-freePackagesFlour) + (priceOneEgg*10*students) + (priceApron * (Math.ceil(students*1.2)));

    if(studentsTotal <= budget){
        console.log(`Items purchased for ${studentsTotal.toFixed(2)}$.`);
    } else{
        console.log(`${(studentsTotal-budget).toFixed(2)}$ more needed.`);
    }
}


//cookingMasterclass([50,2,1.0,0.10,10.0]);
cookingMasterclass([100,25,4.0,1.0,6.0]);
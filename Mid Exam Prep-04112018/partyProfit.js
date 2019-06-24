/*
As a young adventurer, you travel with your party around the world, seeking for gold and glory. 
But you need to split the profit among your companions.
You will receive a party size. After that you receive the days of the adventure. 
Every day, you are earning 50 coins, but you also spent 2 coin per companion for food. 
Every 3rd (third) day, you have a motivational party, spending 3 coins per companion for drinking water. 
Every 5th (fifth) day you slay a boss monster and you gain 20 coins per companion. 
But if you have a motivational party the same day, you spent additional 2 coins per companion. 
Every 10th (tenth) day at the start of the day, 2 (two) of your companions leave, 
but every 15th (fifteenth) day 5 (five) new companions are joined at the beginning of the day.
You have to calculate how much coins gets each companion at the end of the adventure.
Input / Constraints
The input will consist of exactly 2 lines:
•	party size – integer in range [1…100]
•	days – integer in range [1…100]
Output
Print the following message: "{companionsCount} companions received {coins} coins each."
You cannot split a coin, so take the integral part (round down the coins to integer number). 
*/

function partyProfit(arr){

    let days = arr[1];
    let money = 0;
    let dailySpend = 0;
    let currentPeople = arr[0];
    let additionalSpend = 0;
    let additionalEarn = 0;
    let moneyPerPerson = 0;

    for (let i = 1; i <= days; i++){
        money += 50;
        
        if (i % 10 === 0){
            currentPeople -=2;
            additionalEarn = 20 * currentPeople;
        }
        if (i % 15 === 0){
            currentPeople +=5;
            additionalSpend = 3 * currentPeople;
            additionalEarn = 20 * currentPeople;
        }
        if (i % 3 === 0 && i % 5 === 0){
            additionalSpend = 5 * currentPeople;
        }

        if (i % 3 === 0 && i % 15 !==0){
            additionalSpend = 3 * currentPeople;
        }
        if( i % 5 === 0 && i % 10 !==0 && i % 15 !==0){
            additionalEarn = 20 * currentPeople;
        }
        
        dailySpend = 2*currentPeople + additionalSpend - additionalEarn;
        money -= dailySpend;
        moneyPerPerson = Math.floor(money/currentPeople);
        additionalSpend = 0;
        additionalEarn = 0;
        
    }

    console.log(`${currentPeople} companions received ${Math.floor(moneyPerPerson)} coins each.`);
}

partyProfit([15, 30]);
/*
As a young baker, you are baking the bread out of the bakery. 
You have initial energy 100 and initial coins 100. You will be given a string, representing the working day events. 
Each event is separated with '|' (vertical bar): "event1|event2|event3…"
Each event contains event name or item and a number, separated by dash("{event/ingredient}-{number}")
•	If the event is "rest": you gain energy, the number in the second part. But your energy cannot exceed your initial energy 
(100). Print: "You gained {0} energy.". 
After that, print your current energy: "Current energy: {0}.".
•	If the event is "order": You've earned some coins, the number in the second part. 
Each time you get an order, your energy decreases with 30 points.
o	If you have energy to complete the order, print: "You earned {0} coins.".
o	If your energy drops below 0, you skip the order and gain 50 energy points. Print: "You had to rest!".
•	In any other case you are having an ingredient, you have to buy. The second part of the event, contains the coins 
you have to spent and remove from your coins. 
o	If you are not bankrupt (coins <= 0) you've bought the ingredient successfully, and you should print 
("You bought {ingredient}.")
o	If you went bankrupt, print "Closed! Cannot afford {ingredient}." and your bakery rush is over. 
If you managed to handle all events through the day, print on the next three lines: 
"Day completed!", "Coins: {coins}", "Energy: {energy}".
Input / Constraints
You receive a string, representing the working day events, separated with '|' (vertical bar): " event1|event2|event3…".
Each event contains event name or ingredient and a number, separated by dash("{event/ingredient}-{number}")
Output
Print the corresponding messages, described above.
*/

function breadFactory(input){
    let events = input[0].split("|");
    let energy = 100;
    let coins = 100;
    let isNotBankrupt = true;

    for(let i = 0; i< events.length; i++){
        let currentElement = events[i].split('-');
        let command = currentElement[0];
        let number = Number(currentElement[1]);

        if(command==="rest"){
            energy += number;
            if (energy >100) {
                number = number+100-energy;
                energy = 100;
            }
            console.log(`You gained ${number} energy.`);
            console.log(`Current energy: ${energy}.`);    
        } else if(command === 'order'){
            if(energy-30 >= 0){
                energy -=30;
                coins +=number;
                console.log(`You earned ${number} coins.`)
            } else{
                energy+=50;
                console.log(`You had to rest!`);
            }
        } else {
            if(coins-number >0){
                coins -= number;
                console.log(`You bought ${command}.`);
            } else {
                console.log(`Closed! Cannot afford ${command}.`);
                isNotBankrupt = false;
                break;
            }
        }
    }
    if(isNotBankrupt){
        console.log("Day completed!")
        console.log(`Coins: ${coins}`);
        console.log(`Energy: ${energy}`);
    }
}

//breadFactory([ 'order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000' ]);

breadFactory(['rest-2|order-10|eggs-100|rest-10' ]);
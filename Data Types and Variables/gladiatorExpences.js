/*
As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of helmet, sword, shield and armour. You will receive the Peter`s lost fights count. 
•	Every second lost game, his helmet is broken.
•	Every third lost game, his sword is broken.
•	When both his sword and helmet are broken in the same lost fight, his shield also brakes.
•	Every second time, when his shield brakes, his armour also needs to be repaired. 
You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment
*/

function gladiatorExpenses(fights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetBroke = parseInt(fights/2);
    let swordBroke = parseInt(fights/3);
    let shieldBroke = parseInt(fights/6);
    let armorBroke = parseInt(fights/12);

    let expenses = helmetBroke*helmetPrice + swordBroke*swordPrice + shieldBroke*shieldPrice + armorBroke*armorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(23,12.50,21.50,40,200);
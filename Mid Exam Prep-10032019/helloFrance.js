/*
The budget was enough to get them to Frankfurt and they have some money left, but their final aim is to go to France, which means that they will need more finances. They’ve decided to make profit by buying items on discount from the Thrift Shop and selling them for a higher price. You must help them.
Create a program that calculates the profit after buying some items and selling them on a higher price. In order to fulfil that, you are going to need certain data - you will receive a collection of items and a budget in the following format:
{type->price|type->price|type->price……|type->price}
{budget}
The prices for each of the types cannot exceed a certain price, which is given bellow:
Type	Maximum Price
Clothes	50.00
Shoes	35.00
Accessories	20.50
If a price for a certain item is higher than the maximum price, don’t buy it. Every time you buy an item, you have to reduce the budget with the value of its price. If you don’t have enough money for it, you can’t buy it. Buy as much items as you can.
You have to increase the price of each of the items you have successfully bought with 40%. Print the list with the new prices and the profit you will gain from selling the items. They need exactly 150$ for tickets for the train, so if their budget after selling the products is enough – print – "Hello, France!" and if not – "Time to go."
Input / Constraints
•	On the 1st line you are going to receive the items with their prices in the format described above – real numbers in the range [0.00……1000.00]
•	On the 2nd line, you are going to be given the budget – a real number in the range [0.0….1000.0]
Output
•	Print the list with the bought item’s new prices, rounded 2 digits after the decimal separator in the following format:
"{price1} {price2} {price3} {price5}………{priceN}"
•	Print the profit, rounded 2 digits after the decimal separator in the following format:
"Profit: {profit}"
•	If the money for tickets are enough, print: "Hello, France!" and if not – "Time to go."
*/


function helloFrance(input){
    let items = input[0].split("|");
    let collectedItems = [];
    let budget = Number(input[1]);
    let maxPrice = 0;
    let newSum = 0;
    
    for(let i = 0; i< items.length; i++){
        let product = items[i].split("->")[0];
        let price = Number(items[i].split("->")[1]);
        if(product === "Clothes"){
            maxPrice = 50;
        } else if(product === "Shoes"){
            maxPrice = 35;
        } else if(product === "Accessories"){
            maxPrice = 20.50;
        }
        if (budget >= price && price <= maxPrice){
            budget -= price;
            collectedItems.push(price*1.4);
        }
    }
    for(let j = 0; j < collectedItems.length; j++){
        collectedItems[j] = Number(collectedItems[j].toFixed(2));
        newSum +=collectedItems[j];
    }
   
    let profit = newSum-newSum/1.4;
    let currentMoney = budget+newSum;
    
    console.log(collectedItems.map(x => x.toFixed(2)).join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    
    if (currentMoney >= 150){
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}
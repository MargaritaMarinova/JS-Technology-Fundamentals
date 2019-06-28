/*
You have decided to go on an Easter shopping spree to take advantage of the promotions.
Create a program that helps you keep track of the shops that you want to visit. 
You will receive the list of shops you have planned on checking out on a single line, 
separated by a single space in the following format:
"{shop1} {shop2} {shop3}… {shopn}"
Then you will receive a number – n - a count of commands you need to execute over your list. 
There are four possible commands:
•	"Include {shop}":
o	Add the shop at the end of your list.
•	"Visit {first/last} {numberOfShops}"
o	Remove either the "first" or the "last" number of shops from your list, depending on the input. 
If you have less shops on your list than the given number, skip this command.
•	"Prefer {shopIndex1} {shopIndex2}":
o	If both of the shop indexes exist in your list, take the shops that are on them and change their places. 
•	"Place {shop} {shopIndex}"
o	Insert the shop after the given index, only if the resulted index exists.
In the end print the manipulated list in the following format:
"Shops left:
{shop1} {shop2}… {shopn}"
Input / Constraints
•	On the 1st line, you will receive the starting list with the names of the shops separated by a single space.
•	On the 2nd line, you will receive the number of commands - n – an integer in range [1…100]
•	On the next n lines you will be receiving commands in the format described above. 
Output
•	Print the list after the manipulations in the format described above.
*/

function easterShopping(input) {
    let shops = input.shift().split(' ');
    let commandCount = Number(input.shift());

    for (let i = 0; i < commandCount; i++) {
        let currentElement = input[i].split(' ');
        let command = currentElement[0];

        if (command === 'Include') {
            let shop = currentElement[1];
            shops.push(shop);
        } else if (command === 'Visit') {
            let arrEnd = currentElement[1];
            let number = +currentElement[2];
            if (arrEnd === 'first' && number <= shops.length && number>=0) {
                shops.splice(0, number);

            } else if (arrEnd === 'last' && number <= shops.length && number>=0) {
                shops.splice((shops.length-number), (number));
            }
        } else if (command === 'Prefer') {
            let firstShop = +currentElement[1];
            let secondShop = +currentElement[2];
            if (firstShop >=0 && secondShop >=0 && shops.length > firstShop && shops.length > secondShop) {
                let replacement = shops[firstShop];
                shops[firstShop] = shops[secondShop];
                shops[secondShop] = replacement;

            }

        } else if(command==='Place'){
            let newShop = currentElement[1];
            let searchedIndex = +currentElement[2];
            if(searchedIndex >=0 && searchedIndex+1 <= shops.length){
                shops.splice(searchedIndex+1, 0, newShop);
            }
        } 
    }
    console.log('Shops left:');
    console.log(shops.join(' '));

}

easterShopping([ 'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
'5',
'Include HM',
'Visit first 2',
'Visit last 1',
'Prefer 3 1',
'Place Library 2' ]);
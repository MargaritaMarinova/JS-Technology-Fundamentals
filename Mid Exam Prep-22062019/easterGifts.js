/*
As a good friend, you decide to buy presents for your friends.
Create a program that helps you plan the gifts for your friends and family. 
First, you are going to receive the gifts you plan on buying оn a single line, separated by space, in the following format:
"{gift1} {gift2} {gift3}… {giftn}"
Then you will start receiving commands until you read the "No Money" message. There are three possible commands:
•	"OutOfStock {gift}"
o	Find the gifts with this name in your collection, if there are any, and change their values to "None".  
•	"Required {gift} {index}"
o	Replace the value of the current gift on the given index with this gift, if the index is valid. 
•	"JustInCase {gift}"
o	Replace the value of your last gift with this one. 
In the end, print the gifts on a single line, except the ones with value "None", 
separated by a single space in the following format:
"{gift1} {gift2} {gift3}… {giftn}"
Input / Constraints
•	On the 1st line you are going to receive the names of the gifts, separated by a single space.
•	On the next lines, until the "No Money" command is received, you will be receiving commands.
•	The input will always be valid.
Output
•	Print the gifts in the format described above.
*/

function easterGifts(input) {
    let plannedGifts = input.shift().split(" ");
    //input.pop();

    for (let i = 0; i < input.length; i++) {
        let currentNote = input[i].split(' ');
        let command = currentNote[0];

        switch (command) {
            case 'OutOfStock':
                let selectedGift = currentNote[1];
                if (plannedGifts.includes(selectedGift)) {
                    for (let j = 0; j < plannedGifts.length; j++) {
                        plannedGifts[plannedGifts.indexOf(selectedGift)] = "None";
                    }
                }
                break;
            case 'Required':
                let requiredGift = currentNote[1];
                let requiredIndex = +currentNote[2];
                if (requiredIndex >= 0 && requiredIndex < plannedGifts.length) {
                    plannedGifts[requiredIndex] = requiredGift;
                }
                break;
            case 'JustInCase':
                let inCaseGift = currentNote[1];
                plannedGifts.pop();
                plannedGifts.push(inCaseGift);
                break;
            case 'No money':
                break;
        }
    }
    for (let singleGift of plannedGifts) {
        if (singleGift === 'None') {
            let giftIndex = plannedGifts.indexOf(singleGift);
            console.log(typeof giftIndex);
            if (giftIndex < plannedGifts.length) {
                plannedGifts.splice(giftIndex, 1);
            } else if (giftIndex === plannedGifts.length) {
                plannedGifts.pop();
            }
        }
    }
    console.log(plannedGifts.join(' '));
}

easterGifts([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
'OutOfStock Eggs',
'Required Spoon 2',
'JustInCase ChocolateEgg',
'No Money' ]);
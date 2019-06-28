/*
After walking through fire, the group has reached the final step of the quest. 
They have received a list with instructions that will help them resolve the last riddle that will 
lead them to the truth about the Hunting Games.
Create a program that follows given instructions. You will receive a collection of words on a single line, 
split by a single space. They are not what they are supposed to be, so you have to follow the instructions 
in order to find the real message. You will be receiving commands. Here are the possible ones:
-	Delete {index} – removes the word after the given index if it is valid.
-	Swap {word1} {word2} – find the given words in the collections if they exist and swap their places.
-	Put {word} {index} – add a word at the previous place {index} before the 
given one, if it is valid. Note: putting at the last index simply appends the word to the end of the list.
-	Sort – you must sort the words in descending order.
-	Replace {word1} {word2} – find the second word {word2} in the collection (if it exists) and replace 
it with the first word – {word1}.
Follow them until you receive the "Stop" command. After you have successfully followed the instructions, 
you must print the words on a single line, split by a space.
Input / Constraints
•	On the 1st line, you are going to receive the collection of words, split by a single space – strings
•	On the next lines, you are going to receive commands, until you receive the "Stop" command
Output
•	Print the words you have gathered on a single line, split by a single space
*/


function theFinalQuest(input) {
    let words = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(' ');
        let command = element[0];

        switch (command) {
            case 'Delete':
                let index = +element[1] + 1;
                if (index >= 0 && index < words.length) {
                    words.splice(index, 1);
                }
                break;
            case 'Swap':
                let firstWord = element[1];
                let secondWord = element[2];
                let isIncludedFirst = words.indexOf(firstWord);
                let isIncludedSecond = words.indexOf(secondWord);
                if (isIncludedFirst !== -1 && isIncludedSecond !== -1) {

                    words.splice(isIncludedFirst, 1, secondWord);
                    words.splice(isIncludedSecond, 1, firstWord);
                }
                break;
            case 'Put':
                let currentWord = element[1];
                let num = +element[2]-1;
                if (num >= 0 && num <= words.length) {
                    words.splice(num, 0, currentWord);
                }
                break;
            case 'Sort':
                words.sort((a,b)=>b.localeCompare(a));
                break;
            case 'Replace':
                let replaceWord = element[1];
                let toBeReplaced = element[2];
                let isIncluded = words.includes(toBeReplaced);
                if (isIncluded) {
                    words[words.indexOf(toBeReplaced)] = replaceWord;
                }
                break;
            case 'Stop':
                break;
        }
    }
    console.log(words.join(' '));
}

theFinalQuest([ 'Congratulations! You last also through the have challenge!',
'Swap have last',
'Replace made have',
'Delete 2',
'Put it 4',
'Stop']);
/*
As a young adventurer, you start new quest every day, until you retire. 
Input / Constraints
You start your adventurer path, receiving a journal with some beginner quests, separated with ', ' (comma and space). After that, until receiving "Retire!" you will be receiving different commands. 
Commands:
•	"Start - {quest}" – Receiving this command, you should add the given quest in your journal. 
If the quest already exists, you should skip this line.
•	"Complete - {quest}" – You should remove the quest from your journal, if it exists.
•	"Side Quest - {quest}:{sideQuest}" – You should check if the quest exists, 
if so, add the side quest after the quest. Note that you shouldn`t add the sideQuest if it already exists.
•	"Renew – {quest}" – If the given quest exists, you should change its position and put it last in your journal.
Output
After receiving "Retire!" print the quests in the journal, separated by ", " (comma and space).
*/

function questsJournal(input){
    let arr = input.shift().split(', ');
    
    for(let i = 0; i<input.length; i++){
        if(input[i]==="Retire!"){
            break;
        }        
        let command = input[i].split(" - ")[0];
        let quest = input[i].split(" - ")[1];
        
        if(command === "Start"){
            let isIncluded = arr.indexOf(quest);
            if(isIncluded===-1){
                arr.push(quest);
            }
        } else if(command==="Complete"){
            let isIncluded = arr.indexOf(quest);
            if(isIncluded!==-1){
                arr.splice(isIncluded,1);
            }
        } else if(command === "Side Quest"){
            let firstQuest = quest.split(':')[0];
            let sideQuest = quest.split(":")[1];
            let isIncludedQuest = arr.indexOf(firstQuest);
            let isIncludedSide = arr.indexOf(sideQuest);

            if(isIncludedQuest!==-1){
                if(isIncludedSide===-1){
                    arr.splice(isIncludedQuest+1, 0, sideQuest);
                    }
            }
        } else if(command==="Renew"){
            let isIncluded = arr.indexOf(quest);
            if(isIncluded!==-1){
                let element = arr.splice(isIncluded, 1);
                arr.push(element);
            }
        }
    }
    console.log(arr.join(', '));
    
}
questsJournal(["Hello World, If else",
    "Complete - Homework",
    "Side Quest - If else:Switch",
    "Renew - Hello World",
    "Retire!"]);

    // questsJournal(["Hello World, For loop, If else",
    //     "Start - While loop",
    //     "Complete - For loop",
    //     "Retire!"]);
    
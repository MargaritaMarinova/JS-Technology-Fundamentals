/*
Create a program that executes changes over a string. First, you start with an empty string, then you receive commands.
You will be receiving commands until the "End" command. There are five possible commands:
•	"Add {string}"
o	Concatenate {string} to the string.
•	"Upgrade {char}"
o	Find all occurences of {char} and replace it with its ASCII code plus one.
•	"Print"
o	Print the string.
•	"Index {char}"
o	Find the all indeces where {char} occurs, then print them separated by a space. If no occurences - print "None".
•	"Remove {string}"
o	Remove all occurrences of {string} from the string.
Input
•	On each line, until the "End" command is received, you will be receiving commands.
•	All commands are case sensitive.
•	The input will always be valid.
Output
•	Print the output of every command in the format described above.
*/

function stringManipulator(input) {
    let text = '';
    const add = (string) => {
        text = text.concat(string);
    };
    const upgrade = (char) => {
        let incrementedChar = String.fromCharCode(char.charCodeAt(0) + 1);
        let regex = new RegExp(char, 'g');
        text = text.replace(regex, incrementedChar);
    };
    const print = () => {
        console.log(text);
    };

    const findIndex = (char) => {
        let indexes = [];
        for (let i = 0; i < text.length; i++) {
            let currentChar = text[i];
            if (currentChar === char) {
                indexes.push(i);
            }
        }
        let output = indexes.length === 0 ?
            'None' :
            indexes.join(' ');
        console.log(output);
    };
    const remove = (string) => {
        let regex = new RegExp(string, 'g');
        text = text.replace(regex, '');
    };

    let commandParser = {
        "Add": add,
        "Upgrade": upgrade,
        "Print": print,
        "Index": findIndex,
        "Remove": remove
    };
    for (let line of input) {
        if (line === "End") {
            break;
        }
        let tokens = line.split(' ');
        let command = tokens.shift();

        let valueFunc = commandParser[command];
        valueFunc(...tokens);
    };
}

stringManipulator([ 'Add abracadabra',
'Print',
'Upgrade a',
'Print',
'Index b',
'Remove bbrb',
'Print',
'End' ]);
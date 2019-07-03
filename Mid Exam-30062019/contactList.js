/*
Create a program that helps you keep track of the contacts that you have. 
You will receive the list of contacts you already have on a single line, 
separated by a single space in the following format:
"{contact1} {contact2} {contact3}… {contactn}"
Then you will receive commands that you need to execute over your list. There are four possible commands:
•	"Add {contact} {index}":
o	If {contact} isn’t already contained – add it in the end of the collection.
o	If {contact} is already contained – add it on the given index, if the index exists.
•	"Remove {index}"
o	Remove the contact on the given index, if the index exists.
•	"Export {startIndex} {count}":
o	Print the next {count} contacts starting from the given {startIndex} (including), separated by a single space. 
If the count requested is more than the contacts- just print them to the end. 
"{contact} {contact} {contact}"
•	"Print Normal/Reversed"
o	Print the contact list in normal (in the order they have been added) or reversed order and then stop the program:
"Contacts: {contact1} {contact2}… {contactn}"
Input
•	On the 1st line, you will receive the starting list with the names of the contacts separated by a single space.
•	On the next lines, you will receive commands in the format described above.
Output
•	Print the needed output upon the "Export" command.
•	Print the list after the manipulations upon the "Print" command in the format described above.
*/

function contactList(input) {
    let names = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        let command = current[0];

        switch (command) {
            case 'Add':
                let contact = current[1];
                let index = current[2];
                let isIncluded = names.indexOf(contact);
                if (isIncluded === -1) {
                    names.push(contact);
                } else {
                    if (index >= 0 && index < names.length) {
                        names.splice(index, 0, contact);
                    }
                }
                break;
            case 'Remove':
                let indexForRemove = current[1];
                if (indexForRemove >= 0 && indexForRemove < names.length) {
                    names.splice(indexForRemove, 1);
                }
                break;
            case 'Export':
                let startIndex = +current[1];
                let count = +current[2];
                if (startIndex >= 0 && startIndex < names.length && count <= names.length) {
                    let tempArr = names.slice().splice(startIndex, count);
                    console.log(tempArr.join(' '));
                } else if (startIndex >= 0 && startIndex < names.length && count > names.length) {
                    let tempArr = names.slice().splice(startIndex, names.length);
                    console.log(tempArr.join(' '));
                }
                break;
            case 'Print':
                let order = current[1];
                if (order === 'Reversed') {
                    names = names.reverse();
                }
                console.log(`Contacts: ${names.join(' ')}`);
                break;

        }
    }
}

// contactList([ 'Alisson Bellamy Candace Tristan',
// 'Remove 3',
// 'Add Bellamy 2',
// 'Print Normal' ]);

contactList([ 'Zayn Katy Ariana Avril Nick Mikolas',
'Remove 3',
'Add Jacob 0',
'Export 0 3',
'Export 3 8',
'Print Reversed' ]);
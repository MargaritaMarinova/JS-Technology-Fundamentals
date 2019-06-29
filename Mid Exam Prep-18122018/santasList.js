/*
Its Christmas time and Santa needs your help with creating the list of noisy kids. 
Input
You will receive the initial list with noisy kids each of them separated with "&".
After that you will receive 4 types of commands until you receive "Finished!"
•	Bad {kidName} - adds a kid at the start of the list.  If the kid already exists skip this line.
•	Good {kidName} - removes the kid with the given name only if he exists in the list, otherwise skip this line.
•	Rename {oldName} {newName} – if the kid with the given old name exists change his name with the newer one. 
If he doesn't exist skip this line.
•	Rearrange {kidName} - If the kid exists in the list remove him from his current position and add him 
at the end of the list.
Constraints
•	You won't receive duplicate names in the initial list
Output
Print the list of all noisy kids joined by ", ".
•	"{firstKid}, {secondKid}, …{nthKid}"
*/

function santasList(input) {
    let list = input.shift().split('&');

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        let behavior = current[0];
        let name = current[1];
        if (behavior === 'Finished!') {
            break;
        } else if (behavior === 'Bad') {
            if (list.indexOf(name) === -1) {
                list.unshift(name);
            }
        } else if (behavior === 'Good') {
            if (list.indexOf(name) !== -1) {
                list.splice(list.indexOf(name), 1);
            }
        } else if (behavior === 'Rename') {
            let newName = current[2];
            if (list.indexOf(name) !== -1) {
                list.splice(list.indexOf(name), 1, newName);
            }
        } else if (behavior === 'Rearrange') {
            if (list.indexOf(name) !== -1) {
                list.splice(list.indexOf(name), 1);
                list.push(name);
            }
        }
    }
    console.log(list.join(', '));
}

santasList([ 'Joshua&Aaron&Walt&Dustin&William',
'Good Walt',
'Bad Jon ',
'Rename Aaron Paul',
'Rearrange Jon',
'Rename Peter George',
'Finished!' ]);

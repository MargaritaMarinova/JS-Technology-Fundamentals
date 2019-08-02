/*
Write a program that decrypts messages, which contain information about coordinates. You are looking for names of peaks 
in the Himalayas and their geohash coordinates. Keep reading lines until you receive the "Last note" message.
Here is your cipher:
•	Name of the peak 
o	It is consisted of letters (upper and lower), numbers and some of the following characters between its 
letters – "!" "@" "#" "$" "?". Example for valid names: “!@K?#2!#” (K2).
•	The length of the geohashcode 
o	Begins after the "=" (equals) sign and is consisted only of numbers.
•	The geohash code 
o	Begins after these symbols – "<<", may contain anything and the message always ends with it.
Examples for valid input:
"!Ma$$ka!lu!@=9<<ghtucjdhs" – all the components are there – name of the peek, length of the geohashcode and a geohashcode.
"!@Eve?#rest!#=7<<vbnfhfg"
Examples of invalid input:
"anna@fg<<jhsd@bx!=4" – their order is wrong. The name should be first, the length after and the code last.
"#n...s!n-<<tyuhgf4" – the length is missing and the name contains dots.
"Nan$ga!Parbat=8<<gh2tn – the length of the geohash code doesn't match the given number.
The geohash code you are looking for is with length exactly as much as the given length in the message and 
the information must be in the exact given order, otherwise it is considered invalid. If you find it, print the 
following message: 
"Coordinates found! {nameOfMountain} -> {geohashcode}"
Otherwise print: “Nothing found!” after every invalid message.
Input / Constraints
•	You will be receiving strings until you get the “Last note” message.
Output
•	If you find the right coordinates, print: "Coordinates found! {nameOfMountain} -> {geohashcode}".
•	If the message is invalid, print: "Nothing found!".
*/

function solve(input) {
    let line = input.shift();
    while (line !== 'Last note') {
        let pattern = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.+)$/;
        let result = line.match(pattern);
        if (result) {
            let lenCode = Number(result[2]);
            let geohashcode = result[3];
            if (lenCode === geohashcode.length) {
                let nameOfMountain = result[1].replace(/[!@#$?]+/g, '');
                console.log(`Coordinates found! ${nameOfMountain} -> ${geohashcode}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
        line = input.shift();
    }
}
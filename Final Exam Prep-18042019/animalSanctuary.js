/*
You work in an animal sanctuary and every day you receive encrypted information about the animals that need help. 
Create a program that decrypts messages about animals, their kind and the country they are in. 
You will be given a number n – the number of lines, which you will receive. Afterwards on the next n lines, 
you will receive the messages. You are looking for:
•	animalName 
o	contains any ASCII character except for ";”
•	animalKind 
o	contains any ASCII character except for “;”
•	animalCountry 
o	contains only letters and spaces
A valid message is in the following format: "n:{animalName};t:{animalKind};c--{animalCountry}"
The output names, kinds and countries of the animals should contain only letters and white spaces. For example: 
"K@o$5a#la Be^4a5r" is a valid match, but we need to print only – "Koala Bear". After each valid message, 
you should print a line in the format: 
"{animalName} is a {animalKind} from {country}"
You need to know the total weight of all the animals. The weight of each animal alone is calculated by the sum of 
every digit in the name and the kind of the animal. In the end print a line in the following format with 
the following message:
"Total weight of all animals is {weight}KG".
Input / Constraints
•	First line will be a number n in range [1…100].
•	The next n lines will be strings.
Output
•	Print each valid message in the format described above.
•	Print the total weight of all animals.
*/


function animalSanctuary(arr) {
    let num = arr.shift();
    let totalWeight = 0;

    for (let line of arr) {
        let pattern = /^n:[^;]+;t:[^;]+;c--[a-zA-Z]+/g;
        if (pattern.test(line)) {
            let tokens = line.split(';');
            let name = decryptText(tokens[0]);
            let kind = decryptText(tokens[1]);
            let country = tokens[2].slice(3);
            let digitSumName = digitSum(tokens[0]);
            let digitSumKind = digitSum(tokens[1]);
            let animalWeight = digitSumName + digitSumKind;
            totalWeight += animalWeight;
            console.log(`${name} is a ${kind} from ${country}`);

        }
    }
    function decryptText(word) {
        word = word.slice(2).split('');
        let filteredWord = [];
        for (let char of word) {
            let charAsci = char.charCodeAt(0);

            if ((charAsci >= 65 && charAsci <= 90) || (charAsci >= 97 && charAsci <= 122) || charAsci === 32) {
                filteredWord.push(String.fromCharCode(charAsci));
            }
        }
        return filteredWord.join('');
    }
    function digitSum(word) {
        word = word.slice(2).split('');
        let filteredWord = [];
        let digits = 0;
        for (let dig of word) {
            let digAsci = dig.charCodeAt(0);

            if (digAsci >= 48 && digAsci <= 57) {
                filteredWord.push(String.fromCharCode(digAsci));
            }
        }
        
        for (let digit of filteredWord) {
            digits += Number(digit);
        }

        return digits;
    }
console.log(`Total weight of animals: ${totalWeight}KG`);
}

animalSanctuary([ '3',
'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
'n:G3e%6org43e;t:C€$at2%;c--Africa',
'n:AlicE:Won;c-India' ]
);
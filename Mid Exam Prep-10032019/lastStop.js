/*
The group has reached Paris and went to visit "La Louvre". They accidently found a map behind "The Wedding at Canna" painting. It had some instructions, so they have decided to follow them and see where they will lead them. Your job is to help them.
Create a program that follows instructions in order to fulfil a quest. First, you will receive a collection of numbers – each representing a painting number. After that, you are going to be receiving instructions, until the "END" command is given.
-	Change {paintingNumber} {changedNumber} – find the painting with the first number in the collection (if it exists) and change its number with the second number – {changedNumber}.
-	Hide {paintingNumber} – find the painting with this value and if it exists and hide it (remove it).
-	Switch {paintingNumber} {paintingNumber2} – find the given paintings in the collections if they exist and switch their places.
-	Insert {place} {paintingNumber} – insert the painting (paintingNumber) on the next place after the given one, if it exists.
-	Reverse – you must reverse the order of the paintings.
Once you complete the instructions, print the numbers of the paintings on a single line, split by a space.
Input / Constraints
•	On the 1st line, you are going to receive the numbers of the paintings, split by a single space – integer numbers in the range [1…1000]
•	On the next lines, you are going to receive commands, until you receive the "END" command
Output
•	Print the message you have received after the conversion of all numbers on a single line
*/



function lastStop(input){
    let paintings = input.shift().split(" ");
   
    for(let i = 0; i< input.length; i++){
        if(input[i]==="END"){
            break;
        }
        let command = input[i].split(" ")[0];
        let paintingNumber = input[i].split(" ")[1];
        let changingNumber = input[i].split(" ")[2];
        let isIncluded = paintings.indexOf(paintingNumber);
        let isIncludedSecond = paintings.indexOf(changingNumber);
               
        if(command === "Change"){
            if(isIncluded !== -1){
                paintings.splice(isIncluded,1,changingNumber);
                
            }
        } else if(command === "Hide") {
            if(isIncluded !== -1){
                paintings.splice(isIncluded,1);
            }
        } else if(command === "Switch"){
            if(isIncluded !== -1 && isIncludedSecond !== -1){
                let a = paintings.splice(isIncluded,1).join();
                paintings.splice(isIncluded, 0, changingNumber);
                paintings.splice(isIncludedSecond, 1, a);
            }
        } else if(command === "Insert"){
            let place = Number(input[i].split(" ")[1]);
            if(place <= input.length){
                paintings.splice(place+1,0,changingNumber);
            }
        } else if(command==="Reverse"){
            paintings = paintings.reverse();
        }
    }

    console.log(paintings.join(" "));

}
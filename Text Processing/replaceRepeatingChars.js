/*
Write a function that receives a single string and replaces any sequence of the same letters 
with a single corresponding letter.
*/

function replaceRepeatingChars(text){
    let textArr = text.split("");
    let result = [];
    for(let i = 0; i<textArr.length; i++){
        let current = textArr[i];
        let next = textArr[i+1];
        if(current !== next){
            result.push(current);
        }
    }
    console.log(result.join(''));
}

replaceRepeatingChars('qqqwerqwecccwd');

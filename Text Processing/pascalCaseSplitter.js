/*
You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.
*/

function pascalCaseSplitter(text) {

    let pattern = /[A-Z]{1}[a-z]*/g
    let result = text.match(pattern).join(', ');
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
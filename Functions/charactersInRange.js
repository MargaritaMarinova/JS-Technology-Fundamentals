/*
Write a function that receives two characters and 
prints on a single line all the characters in between them according to the ASCII code.
*/

function charactersInRange(start, end){
    let startNum = start.charCodeAt(0);
    let endNum = end.charCodeAt(0);
    let resultArr = [];

    if (startNum > endNum){
        let holder = startNum;
        startNum = endNum;
        endNum = holder;
    }

    for (let i = startNum+1; i < endNum; i++){
        resultArr.push(String.fromCharCode(i));

    }

    console.log(resultArr.join(' '));

}


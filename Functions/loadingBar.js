/*
You will receive a single number between 0 and 100 which is divided with 10 without residue (0,
10, 20, 30...).
Your task is to create a JS function that visualize a loading bar depending on that number you
have received in the input. See examples for more clarity.
*/

function loadingBar(num){
    let dotNum = (100-num)/10;
    let signNum = num/10;
    let signArr = [];
    let signStr;
    for(let i = 0; i<signNum; i++){
        signArr.push('%');
    } 
    for(let j = 0; j< dotNum; j++){
        signArr.push('.');
    }
    signStr = signArr.join('');
    
    if(num === 100){
        console.log("100% Complete!");
        console.log(`[${signStr}]`);
    } else {
        console.log(`${num}% [${signStr}]`);
        console.log("Still loading...");
    }
}
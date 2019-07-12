/*
The input will be a single string.
Write a function that cuts the given string into half and reverse the two halves. 
Print each half on a separate line.
*/
function cutAndReverse(text) {
    let firstText = text.substring(0, text.length / 2).split('').reverse().join('');
    console.log(firstText);
    let secondText = text.substring(text.length / 2);
    let reversedStr = secondText.split('').reverse().join('');
    console.log(reversedStr);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
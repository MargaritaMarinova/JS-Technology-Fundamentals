/*
Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string which contains templates containing '*'.
Find the word with exact same length as the template and replace it.
*/

function revealWords(words, text){
 words.split(", ").forEach((word)=>{
     text=text.replace('*'.repeat(word.length), word);
 });
 console.log(text);
}

revealWords('great',
'softuni is ***** place for learning new programming languages');
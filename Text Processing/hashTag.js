/*
The input will be a single string.
Find all special words starting with #. Word is invalid if it has anything other than letters. 
Print the words you found without the tag each on a new line.
*/
function hashTag(text){
    text.split(' ').forEach((word)=>{
        let pattern=/#[A-Za-z]+/g;
        if(pattern.test(word)){
            console.log(word.substring(1));
        }
    });
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
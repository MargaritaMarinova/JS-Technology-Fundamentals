/*
Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension.
*/

function extractFile(text){
    let textArr=text.split("\\");
    //console.log(textArr);
    let lastElement = textArr[textArr.length-1];
    let fileName = lastElement.substring(0, lastElement.lastIndexOf('.'));
    let fileExt = lastElement.substring(lastElement.lastIndexOf('.')+1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);    
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
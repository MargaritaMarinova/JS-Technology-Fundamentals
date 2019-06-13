/*
Write a JS function that checks if a given password is valid. Password rules are:
 6 – 10 characters (inclusive)
 Consists only of letters and digits
 Have at least 2 digits
If a password is valid print &quot;Password is valid&quot;. If it is not valid, for every unfulfilled rule print a
message:
 &quot;Password must be between 6 and 10 characters&quot;
 &quot;Password must consist only of letters and digits&quot;
 &quot;Password must have at least 2 digits&quot;
*/


function passwordValidator(str){
    let isCorrect = true;
    str = str.toLowerCase();
    let digits = 0;
    

    if (str.length< 6 || str.length>10) {
        console.log('Password must be between 6 and 10 characters');
        isCorrect = false;
    }
    
    for (let ind in str) {
        let asciEl = str.charCodeAt(ind);
        if(asciEl >=48 && asciEl<= 57){
            digits++;
        } 
        if(asciEl < 48 || (asciEl > 57 && asciEl < 97) || asciEl > 122) {
            console.log("Password must consist only of letters and digits");
            isCorrect = false;
            break;
        }
        
        
        }

        if(digits <2){
            console.log("Password must have at least 2 digits");
            isCorrect = false;
        }
        if(isCorrect){
            console.log("Password is valid");
        }
    
    

}
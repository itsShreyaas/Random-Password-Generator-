function generatePassword(passwordLength,includeuppercase,includelowercase,includenumbers,includesymbols){
    const uppercaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars='abcdefghijklmnopqrstuvwxyz';
    const numberChars='0123456789';
    const symbolChars='!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let allChars='';
    let password='';
    allChars+=includelowercase?lowercaseChars:'';
    allChars+=includeuppercase?uppercaseChars:'';
    allChars+=includenumbers?numberChars:'';
    allChars+=includesymbols?symbolChars:'';
    if(allChars.length===0){
        return 'Please select at least one character type.';
    }
    for(let i=0;i<passwordLength;i++){
        const randomIndex=Math.floor(Math.random()*allChars.length);
        password+=allChars[randomIndex];
    }
    return password;
}

const passwordLength=12;
const includelowercase=true;
const includeuppercase=true;
const includenumbers=true;
const includesymbols=true;

const password=generatePassword(passwordLength,includeuppercase,includelowercase,includenumbers,includesymbols);
console.log(`Generated Password:${password}`);
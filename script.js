function generatePassword(passwordLength, includeuppercase, includelowercase, includenumbers, includesymbols){

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
        return 'Select at least one option';
    }

    for(let i=0;i<passwordLength;i++){
        const randomIndex=Math.floor(Math.random()*allChars.length);
        password+=allChars[randomIndex];
    }

    return password;
}

function createPassword(){

    const length=document.getElementById("length").value;
    const uppercase=document.getElementById("uppercase").checked;
    const lowercase=document.getElementById("lowercase").checked;
    const numbers=document.getElementById("numbers").checked;
    const symbols=document.getElementById("symbols").checked;

    const password=generatePassword(length, uppercase, lowercase, numbers, symbols);

    document.getElementById("result").value=password;
}

function copyPassword(){

    const passwordField=document.getElementById("result");
    const copyMsg=document.getElementById("copyMsg");

    if(passwordField.value===""){
        copyMsg.innerText="Generate password first!";
        return;
    }

    navigator.clipboard.writeText(passwordField.value);

    copyMsg.innerText="Copied!";

    setTimeout(()=>{
        copyMsg.innerText="";
    },2000);
}

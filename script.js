let generateButton = document.getElementById('generate');
let pass1Button = document.getElementById('pass1')
let pass2Button = document.getElementById('pass2')
let pass3Button = document.getElementById('pass3')
let pass4Button = document.getElementById('pass4')
let errorMsg = document.getElementById('error-msg');
let passwordLen = document.getElementById('password-length');
let copyPassword = document.getElementById('copy-password')

let allowedCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '#', '$', '%', '&', '(',')','*','+'];

let passArr1 = passArr2 = passArr3 = passArr4 = ''; 
let passlen1, passlen2, passlen3, passlen4;


function generatePassword() {
    let randomCh1 = Math.floor(Math.random() * 71);
    passArr1 += allowedCharacter[randomCh1];
    passlen1 = passArr1.length;   

    let randomCh2 = Math.floor(Math.random() * 71);
    passArr2 += allowedCharacter[randomCh2];
    passlen2 = passArr2.length; 
    
    let randomCh3 = Math.floor(Math.random() * 71);
    passArr3 += allowedCharacter[randomCh3];
    passlen3 = passArr3.length;

    let randomCh4 = Math.floor(Math.random() * 71);
    passArr4 += allowedCharacter[randomCh4];
    passlen4 = passArr4.length;
}

function repeatRand() {
    let passwordLength = passwordLen.value;

    if(passwordLength === "" || passwordLength == 0 || passwordLength < 0 || passwordLength < 8) {
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Since you did not input any valid/strong length, default Password Length of 8 will be used.';
        passwordLength = 8;
    } else if (passwordLength <= 15) {
        passwordLength = Number(passwordLen.value);
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'When you are not Putin, why putting such password length? Omooooo. Anyway, Password length of 15 will be used!';
        passwordLength = 15;
    }
    
    if (passwordLength > 12 && screen.width <= 550) {
        pass1Button.style.width = '100%';
        pass2Button.style.width = '100%';
        pass3Button.style.width = '100%';
        pass4Button.style.width = '100%';
    }
    
    else {
        pass1Button.style.width = '48%';
        pass2Button.style.width = '48%';
        pass3Button.style.width = '48%';
        pass4Button.style.width = '48%';
    }
    
    for (i = 0; i <= passwordLength; i++) {
        generatePassword();
        if(passlen1 === passwordLength) {
            pass1Button.textContent = passArr1
            pass2Button.textContent = passArr2
            pass3Button.textContent = passArr3
            pass4Button.textContent = passArr4
        }
        
    }
}

pass1Button.addEventListener('click' , function() {
    // pass1Button.select();
    // pass1Button.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(pass1Button.textContent);
    copyPassword.style.display = 'block';
    copyPassword.innerText = 'Password1 Copied'
})

pass2Button.addEventListener('click' , function() {
    navigator.clipboard.writeText(pass2Button.textContent);
    copyPassword.style.display = 'block';
    copyPassword.innerText = 'Password2 Copied'
})

pass3Button.addEventListener('click' , function() {
    navigator.clipboard.writeText(pass3Button.textContent);
    copyPassword.style.display = 'block';
    copyPassword.innerText = 'Password3 Copied'
})

pass4Button.addEventListener('click' , function() {
    navigator.clipboard.writeText(pass4Button.textContent);
    copyPassword.style.display = 'block';
    copyPassword.innerText = 'Password4 Copied'
})

generateButton.addEventListener("click" , 
    function() {
        repeatRand();
        pass1Button.style.cursor = 'pointer';
        pass2Button.style.cursor = 'pointer';
        pass3Button.style.cursor = 'pointer';
        pass4Button.style.cursor = 'pointer';
        copyPassword.style.display = 'block'
        copyPassword.innerText = 'Click on any of the password to copy it.'
        passArr1 = passArr2 = passArr3 = passArr4 = '';

        
    } 
) 
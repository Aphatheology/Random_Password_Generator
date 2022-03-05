let generateButton = document.getElementById('generate');
let allowedCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '#', '$', '%', '&', '(',')','*','+'];
let pass1Button = document.getElementById('pass1')
let pass2Button = document.getElementById('pass2')
let pass3Button = document.getElementById('pass3')
let pass4Button = document.getElementById('pass4')
let errorMsg = document.getElementById('error-msg');

let passwordLen = document.getElementById('password-length');



// Get random Character from the allowedCharacter Array



let passArr1 = passArr2 = passArr3 = passArr4 = ''; 
let passlen1, passlen2, passlen3, passlen4;


// let storepass = []

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

    if(passwordLength === "" || passwordLength == 0) {
        errorMsg.style.display = 'block';
        passwordLength = 8;
    } else {
        errorMsg.style.display = 'none';
        passwordLength = Number(passwordLen.value)
    }
    
    
    for (i = 0; i <= passwordLength; i++) {
        generatePassword();
        if(passlen1 === passwordLength) {
            console.log(passArr1)
            console.log(passArr2)
            console.log(passArr3)
            console.log(passArr4)
            pass1Button.textContent = passArr1
            pass2Button.textContent = passArr2
            pass3Button.textContent = passArr3
            pass4Button.textContent = passArr4
        }
        
    }
}

generateButton.addEventListener("click" , 
    function() {
        repeatRand();
        passArr1 = passArr2 = passArr3 = passArr4 = '';
        // passwordLen.value = ''
    } 


) 


    // for (j = 0; j !== 8; j++) {
        // randomCh = Math.floor(Math.random() * 71);
        // console.log(randomCh)
        // passArr += allowedCharacter[randomCh];
        // passlen = passArr.length;
        // generatePassword();
        // console.log(j)
        // if(passlen === 8) {
        //     console.log(passArr);
        //     pass2Button.textContent = passArr
        // }
        
    // }

    
    // function() {
    //     for (i = 0; i !== 8; i++) {
    //         generatePassword();
    //         if(passlen === 8) {
    //             console.log(passArr);
    //             pass1Button.textContent = passArr
    //         }
            
    //     }
    // }

// function passL() {
//     for (i = 0; i !== 8; i++) {
        
//         generatePassword()
//         // pass1Button.textContent = passArr        
//     }
    
// }

// if(storepass.length < 4) {
//     console.log("Not yet there " + storepass.length)
// }

// generateButton.addEventListener('click' , 
// function () {
//     // for (i = 0; i !== 8; i++) {
        
//     //     generatePassword()
//     //     // pass1Button.textContent = passArr        
//     // }
//     generatePassword()
    
    
//     if(passlen === 8) {
//         storepass.push(passArr)
//         pass1Button.textContent = storepass[0]
//         pass2Button.textContent = storepass[0]
//         pass3Button.textContent = storepass[0]
//         pass4Button.textContent = storepass[0]
//         console.log(storepass[0])
//     }
    
// }
// )
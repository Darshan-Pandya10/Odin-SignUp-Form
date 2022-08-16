const form = document.querySelector('form');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const email = document.querySelector('.email');
const phoneNumber = document.querySelector('.phonenumber');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmpassword');
let patternName = /^[a-z]{3,14}$/
let patternPassword = /^[a-zA-Z0-9]{8,14}$/

firstName.addEventListener('keyup', () => {
    
    let result = patternName.test(firstName.value)

    if(result){
        firstName.style.border = '1px solid rgb(116, 240, 97)'
    }

    else
    {
        firstName.style.border = '1px solid rgb(240, 97, 97)'
    }

});


lastName.addEventListener('keyup', () => {
    
    let result = patternName.test(lastName.value)

    if(result){
        lastName.style.border = '1px solid rgb(116, 240, 97)'
    }

    else
    {
        lastName.style.border = '1px solid rgb(240, 97, 97)'
    }

});

password.addEventListener('keyup', () => {
    
    let result = patternPassword.test(password.value)

    if(result){
        password.style.border = '1px solid rgb(116, 240, 97)'
    }

    else
    {
        password.style.border = '1px solid rgb(240, 97, 97)'
    }

});

confirmPassword.addEventListener('keyup' , () => {

    if(confirmPassword.value === password.value){
        confirmPassword.style.border = '1px solid rgb(116, 240, 97)'
    }

    else
    {
        confirmPassword.style.border = '1px solid rgb(240, 97, 97)'
    }

});
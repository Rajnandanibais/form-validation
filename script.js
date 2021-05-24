'use strict'
const form = document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirm-password');




//show error func
const showError = function(input,message){
    const formControl = input.parentElement;
    formControl.className='formControl error';
    const small=formControl.querySelector('small');
    small.innerText=message;
};

//show success
const showSuccess = function(input){
    const formControl = input.parentElement;
    formControl.className='formControl success';
    
};


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(username === ''){
        showError(username,'username is required');
    }




});
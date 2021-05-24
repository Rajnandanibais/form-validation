'use strict'
const form = document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirm-password');

//crete arr
const inputarr=[username,email,password,confirmpassword];


//func for show error
const showErorr=function(input , message){
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
};

//showsuccess func

const showSuccess=function(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}

//valid email
const validEmail = function(input){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
};

//check email
const checkEmail =function(input){


    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase())){
     showSuccess(input);
    }else{
        showErorr(email,'email is invalid');
    }




}




const checkRequired = function(inputarr){
    inputarr.forEach((input) =>{
   if (input.value ===''){
       showErorr(input,` required`);
   }else{
       showSuccess(input);
   }

    });
}


form.addEventListener('submit',(e) =>{
e.preventDefault();
checkRequired(inputarr);
});






//if(username.value===''){
  //  showErorr(username,'username is required');
//}else{
  //  showSuccess(username);
//}


//if(email.value===''){
  //  showErorr(email,'email is required');
//}  else if (!validEmail(email.value)) {
  //  showErorr(email,'email is invalid');
    //}
//else{
  //  showSuccess(email);
//}


//if(password.value===''){
  //  showErorr(password,'password is required');
//}else{
  //  showSuccess(password);
//}

//if(confirmpassword.value===''){
  //  showErorr(confirmpassword,'confirmpassword is required');
//}
//else{
  //  showSuccess(confirmpassword);
//}

//});

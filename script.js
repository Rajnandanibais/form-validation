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
        showErorr(input,'email is invalid');
    }
};
//min max funv
const checkLength =function(input,min,max){
    if(input.value.length<min){
        showErorr(input,`${message(input)}must be at least ${min} character`);
    }else if(input.value.length>max){
        showErorr(input,`${message}must be less than ${max} character`);
    }else{
        showSuccess(input);
}
};
// check password func
const checkPassword = function (input1,input2){
    if (input1.value !== '' && input2.value !== '')
      if (input1.value !== input2.value) {
        showError(input2,'Password not matched');
      } else {
        showSuccess(input1);
        showSuccess(input2);
      }
  };


  //func for mess
  const message = function (input) {
    var errorMessage = input.id.replace(/-p/, ' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
  };
// func for refactor code
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
 checkEmail(email);
 checkLength(password,6,12);
 checkPassword(password,confirmpassword);
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

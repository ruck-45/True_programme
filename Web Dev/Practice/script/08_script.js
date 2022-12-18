//  Variables

let sign_thru_btns = document.getElementsByClassName('sign_thru_btn');

let submit_btn = document.getElementById('submit_btn');

let password = document.getElementsByClassName('pasw');



// Interactive Sign Through Buttons

for(let i=0; i<sign_thru_btns.length; i++){
    sign_thru_btns[i].addEventListener('mousedown',function(){
        sign_thru_btns[i].classList.add('sign_thru_btn_mousedown');
    });

    sign_thru_btns[i].addEventListener('mouseup',function(){
        sign_thru_btns[i].classList.remove('sign_thru_btn_mousedown');
    });
}




// Interactive Sign Up button

submit_btn.addEventListener('mousedown',function(){
    submit_btn.style.transform = 'scale(99%)';
});

submit_btn.addEventListener('mouseup',function(){
    submit_btn.style.transform = 'scale(100%)';
});




// Password visibility function

for(let i=0; i<password.length; i++){
    let eye = password[i].nextElementSibling;

    eye.addEventListener('mousedown',function(){
        eye.style.transform = 'scale(120%)';
        eye.style.transition = '0.1s';
    });

    eye.addEventListener('mouseup',function(){
        eye.style.transform = 'scale(100%)';
        eye.classList.toggle('fa-eye');
        eye.classList.toggle('fa-eye-slash');

        if(eye.className.includes('fa-eye-slash')){
            password[i].type = 'text';
        }
        else{
            password[i].type = 'password';
        }
    });
}



// Form validation function

let form = document.getElementById('frm');
let errors = document.getElementsByClassName('error');


function form_validate(){
    let pass = 0;
    let username = errors[0].previousElementSibling.firstElementChild;
    let psswd = errors[2].previousElementSibling.firstElementChild;
    let cnfirm_psswd = errors[3].previousElementSibling.firstElementChild;

    for(let i=0;i<errors.length;i++){ // checking for value entered or not
        if(errors[i].previousElementSibling.firstElementChild.value == ''){
            errors[i].innerHTML = '*Value not Entered';
            pass++;
        }
        else{
            errors[i].innerHTML = '';
        }
    }

    if(username.value.length<5 && username.value.length>0){
        errors[0].innerHTML = '*Username Must be at least 5 charecters';
        pass++;
    }
    else{
        errors[0].innerHTML = '';
    }
    
    
    if(psswd.value.length < 6 && psswd.value.length > 0){
        errors[2].innerHTML = '*Password must be of at least 6 charecters';
        pass++;
    }
    else if(psswd.value.length > 0 && (/[A-Z]/.test(psswd.value) == false || /[a-z]/.test(psswd.value) == false)){
        errors[2].innerHTML = '*Password must have both lowercase and uppercase letters';
        pass++;
    }
    else if(psswd.value.length > 0 && /[0-9]/.test(psswd.value) == false){
        errors[2].innerHTML = '*Password must have at least one digit';
        pass++;
    }
    else if(psswd.value.length > 0 && space_present(psswd.value)){
        errors[2].innerHTML = '*Password should not contain space';
        pass++;
    }
    else if(psswd.value.length > 0 && spcl_char(psswd.value) == false){
        errors[2].innerHTML = '*Password should contain at least one special charecter';
        pass++;
    }
    else{
        errors[2].innerHTML = '';
    }
    
    
    if(psswd.value != cnfirm_psswd.value){
        errors[3].innerHTML = '*Did not match with Password !';
        pass++;
    }
    else{
        errors[3].innerHTML = '';
    }

    if(pass){
        return false;
    }
    else{
        return true;
    }
    
}


function space_present(str){
    for(let i=0; i<str.length; i++){
        if(str[i] == ' '){
            return true;
        }
    }
    return false;
}

function spcl_char(str){
    for(let i=0; i<str.length; i++){
        if(/[A-Za-z0-9]/.test(str[i]) == false){
            return true;
        }
    }
    return false;
}
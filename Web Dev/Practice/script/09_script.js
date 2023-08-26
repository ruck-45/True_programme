// Variables

let copy_btn = document.getElementById('copy');
let text_box = document.getElementById('text_box');

let drop_down = document.getElementsByClassName('fa')[0];
let stats_div = document.getElementById('statistics');

let low_info = document.getElementById('low_info');

let bars = document.getElementsByClassName('bar');
let values = document.getElementsByClassName('value');



// Copy from clipboard function

copy_btn.addEventListener('mousedown', function(){ // stylig mousedown on the button
    copy_btn.classList.add('copy_border_mousedown');
});


copy_btn.addEventListener('mouseup', function(){ // pasting contents of clipboard to textbox
    copy_btn.classList.remove('copy_border_mousedown');
    copy_btn.style.display = 'none';

    navigator.clipboard.readText().then(function(text){
        text_box.value = text;
        let arr = str_info(text);
        set_val(arr);
    });
    
});


text_box.addEventListener('input',function(){ 
    if(text_box.value == ''){
        copy_btn.style.display = 'block';
    }
    else
    {
        copy_btn.style.display = 'none'; // removing copy button when text_box has inputs
    }

    let arr = str_info(text_box.value);
    set_val(arr);
});



// Dropdown functionality

drop_down.addEventListener('mousedown', function(){ // styling mousedown on the drpdown
    drop_down.classList.remove('plus_minus_default');
    drop_down.classList.add('plus_minus_mousedown');
});


drop_down.addEventListener('mouseup', function(){
    drop_down.classList.remove('plus_minus_mousedown');
    drop_down.classList.add('plus_minus_default');

    if(stats_div.style.height == '90%'){
        drop_down.classList.remove('fa-minus');
        drop_down.classList.add('fa-plus');
        
        stats_div.style.height = '45%';
        low_info.style.marginBottom = '50px';
        stats_div.style.transition = '0.13s';
    }
    else{
        drop_down.classList.remove('fa-plus');
        drop_down.classList.add('fa-minus');
        
        stats_div.style.height = '90%';
        low_info.style.marginBottom = '7px';
        stats_div.style.transition = '0.19s';
    }
});


// Dynamic info generation function

function str_info(str){
    let words = 0;
    let arr = str.trim().split(' ');
    
    let chars = 0;
    let letters = 0;
    let vowels = 0;
    let consonants = 0;
    let special_chars = 0;
    let spaces = 0;

    for(let i=0; i<str.length; i++){
        chars++;

        if(str[i] == ' ')
        {
            spaces++;
        }
        else if(str[i]>='A' && str[i]<='z'){
            letters++;

            if('aeiou'.includes(str[i].toLowerCase())){
                vowels++;
            }
            else
            {
                consonants++;
            }
        }
        else{
            special_chars++;
        }
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] != ''){
            words++;
        }
    }

    return [words,chars,letters,vowels,consonants,special_chars,spaces];
}

function set_val(arr){
    for(let i=0; i<values.length; i++){
        values[i].innerHTML = arr[i];
    }
}

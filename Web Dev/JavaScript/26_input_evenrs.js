// Any form (input/submit etc..) element has 2 states
    // focus : when they are clicked and are in focus
    // blur : when they are out of focus


let text_box = document.getElementById('text_01');


// focus : captures when the input element is focused
    text_box.addEventListener('focus',function(){
        console.log('text_box in focus');
        text_box.style.background = 'yellow';
    });


// blur : captures when the input element comes out of focus
    text_box.addEventListener('blur',function(){
        console.log('text_box out of focus');
        text_box.style.background = 'white';
    });


// change : captures if a change is recorded after the element comes out of focus
    text_box.addEventListener('change',function(){ // will only activates this function if current blur state has other value than last blur state
        console.log(this.value); // prints the contents inside text box
    });


// input : records every change happens during focus state
    text_box.addEventListener('input',function(){
        console.log(this.value);
    });
// Key down events

// keydown : records every key as soon as it is pressed
             // can be applied on window : will record every single key clicked
             // can be applied for a single element
             // will register multiple times as much time the key is pressed


    window.addEventListener('keydown',key_dn_func);

    function key_dn_func(key){ // function requires a parameter as the eventListener passes the key
        console.log(key.key); // displays the key pressed
    };


// keyup : records every key as soon as it is released
    window.addEventListener('keyup',key_up_func);

    function key_up_func(key){
        console.log(key.key);
    };


// example of adding it to a specific element
    let a = document.getElementById('text_01');
    a.addEventListener('keydown',function(key){
        console.log(key.key);
    });
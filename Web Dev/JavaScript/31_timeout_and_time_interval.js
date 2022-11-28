// Timeout
    // it enables us to delay a function for required seconds
    // takes two arguments : function name and time to wait (in ms)

    let T = setTimeout(fun,5000) // 5000 ms = 5 s
                                       // capturing it in a variable to be able to close at will
    
    function fun(){
        alert('This message is 5s delayed'); // function passed in settimeout
    }

    window.addEventListener('keydown',function(event){ // added an event listener to window to record if 'q' is pressed
        console.log(event.key); // for debug purposes
        if(event.key == 'q'){ // if q is pressed then donot let the timeout object to execute
            clearTimeout(T); // stops the timeout object from execution
        }
    });


// Interval
    // if we want an action to be performed again and again after an interval we use Interval
    // it works same as timeout

    let I = setInterval(fun2,2000); // will be repeated every 2 seconds
                                    // I will hold the interval object so that we can terminate it freely


    function fun2(){
        alert('interval ...');
    }

    window.addEventListener('keydown',function(event){ //  captures key down events
        console.log(event.key);
        if(event.key == 'x'){ // if 'x' is pressed
            this.clearInterval(I); // it will clear out the event
        }
    });

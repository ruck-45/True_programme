// Effects

    // There are some handy effects already available in jQuery


    // .hide() : sets display : none
    // .show() : sets display : block
    // .toggle() : toggles hide and show


    // .fadeIn() : .show() with fadeIn animation
    // .fadeOut() : .hide() with fadeOut animation
    // .fadeToggle() : toggles fadeIn and fadeOut
    // .fadeTo( time(ms) , opacity(0.4) ) : fades the element to specified opacity

    // .slideUp() : .hide() with slideUp animation
    // .slideDown() : .show() with slideDown animation
    // .slideToggle() : toggles slideUp and slideDown

    // .animate() : performs animation (nonly on numeric properties)
        $( "p" ).animate({
            left: 50,
            opacity: 1,
            width : "25px"
        }, 500 ); // 500 here is 0.5 s time

    // .stop() : pauses the animation in motion, (can be resumed from the same point)
    // .finish() : It stops, removes and complete all queued animation for the selected elements
    // .delay() : sets delay execution for all the queued functions on the selected elements



// Time-Period

    // Every event takes time as an argument in miliseconds(ms)
    // They perform the effect in the specified time period




// Callback

    // We can pass a callback function to every effect in jQuery
    // Callback functions are executed after the effects have completed

    // Situation 1
        $('a').click(function(){
            $(this).fadeOut(5000); // will take 5 seconds to fade out
            alert("Hello"); // will not wait for 5 seconds and immediately interrupt the animation
        })

    
    // Situation 2
        $('a').click(function(){
            $(this).fadeOut(5000,function(){
                alert("Hello"); // here it is passed as a callback function and will execute after the effect finishes in 5s
            });
        })





// Chaining

    // We can use multiple effects as chains 
    // Providing time is mandatory here
    $('a').click(function(){
        $(this).css("background-color","red").slideUp(2000).slideDown(2000).hide(2000);
    })
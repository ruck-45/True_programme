// DOM events are caused because of either :
    // user action
    // state change of elements in DOM tree (state change in HTML elements)


// Examples of HTML events:
    // mouse click
    // key press
    // scrolling
    // mouseover, mouseout

    // when DOM tree is loaded
    // when webpage is loaded
    // when an image is loaded
    // when an element is loaded

    // when an input field is chosen
    // when an input field is changed
    // when an HTML form is submitted

    // etc...


// We can respond to HTML events trrough javascript
// For that we need to capture the event occuring
// we can do that two ways
    // inline : add 'on' before any event name to turn it an attribute
                // then we can pass it the function we need to execute
    // addEventListener() property : it takes the event name and function name to apply the function when the event occures


// inline event:
    function click_fun(){
        console.log('click registered');
    }
    
    // <button onclick="click_fun()"> Submit </button>  : we directly write event inline

// addEventistener():
    // adding event through javascript
    // only requires event names

    function mouse_over_fun(){
        console.log('mouse over');
    }

    let ele = document.getElementById('id_01');

    ele.addEventListener('mouseover',mouse_over_fun); // can add multiple event to same element
    ele.addEventListener('mouseout',function(){ // can use anonymus function if needed
        console.log('mouse out');
    });

    ele.addEventListener('mouseover',function(){ // can add same event to same element multiple times
        console.log('mouseover _02');
    })
    ele.addEventListener('mouseover',function(){
        console.log('mouseover _03');
    })


    ele.removeEventListener('mouseover',mouse_over_fun); // removes event listener (can be used with conditional statement)
    ele.removeEventListener('click',click_fun); // can't remove inline event


    ele.removeEventListener('mouseover',function(){  // can't remove events having anonymus functions
        console.log('mouseover _03');
    });

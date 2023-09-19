// Events

    // There are some special methods pre-baked into jQuery to make handling of day to day events easier
    // They are simpler ways to implement eventListeners


// Mouse Events

    // .click() : single left click
    // .dblclick() : double left click
    // .contextmenu() : right click

    // .mousedown() : left mouse click down
    // .mouseup() : left mouse click up



    // .mouseenter() : on mouse entering only the region of element (not the children)
    // .mouseleave() : on mouse leaving only  the region of element(not the children)

    // .mouseover() : mouseenter + mouseenter on children will also count
    // .mouseout() : mouseleave + mouseleave on children will also count

    // .hover() : It combines the mouse mouseover and mouseout properties
                // It takes two functions, one for mouseover and another for mouseout
                // .hover(fun1, fun2)


    // .mousemove() : if mouse moves within the selected element


// Keyboard Events

    // .keydown(): When a key is pressed down
    // .keyup(): When a key pressed is released

    // .keypress(): When a key is pressed


// Form Events

    // .focus() : when the element in focus (generally form elemet)
    // .blur()  : when the element is out of focus

    // .focusin() : focus + activated when child is also in focus
    // .focusout() : blur + activated when child is also in blur

    // .change() : when value of an element changes (after it comes out of focus)

    // .select() : when a text is selected (marked) in a text area or a text field

    // .submit() : when a submit event occures


// Browser Events

    // .error() : when an element encounters an error that is the element is not loaded correctly
    // .resize()  : when the element resizes (applies for browser window as well)
    // .scroll()  :  when scroll event happens on an element


// Document Loading

    // .ready() : ready event occurs when the DOM (document object model) / that perticular element has been loaded
    // .load() :  powerful AJAX method, loads data from a server and puts the returned data into the selected element
                // $(selector).load(URL,data,callback)
    







// event attributes

    // Whenever we use an event on an element, it returns an object which has many properties attached to it
    // We can utilize them in following ways
    
    // event.preventDefault() : used to prevent default behaviour of an element during that event
        $("a").click(function(event){
            event.preventDefault(); // prevents anchor tag to refresh/load the page when clicked
        })

    
    // event.pageX , event.pageY  : used with .mousemove() event
            // pageX : mouse pointer’s position, which is related to the left side edge of the document
            // pageY : mouse pointer’s position, which is related to the top-hand side edge of the document

            $(document).mousemove(function(event){
                event.pageX;
                event.pageY;
            });

    
    // event.timeStamp : the time when the evnet is created (UNIX)



// on & off

    // .on() : we can attach multiple events on the same element using .on()
        $("button").on({
            click : function(){
                $(this).css("color","red");
            },
            mouseover : function(){
                $(this).css("color","green");
            },
            mouseout : function(){
                $(this).css("color","black");
            }
        });


    // .off() :  used to remove all specified event attached to the element
        $("button").off('click')




// Load document

    // We know that writing script tag in head without defer will cause error as DOM hasn't loaded yet
    // we can wait for DOM loading in jQuery in following ways : 

        // Normal : 
        $(document).ready(function(){
            // code ...  will execute after all DOM elements have loaded successfully
        });

        // Shortcut
        $(function(){
             // code ...  will execute after all DOM elements have loaded successfully  
        });

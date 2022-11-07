// If a child and parent share same event then if the child evnet is called , it autometically triggers the parent
// This can cascadically applie to entire DOM tree
// By default Event Bubbling happens

// Event Bubbling : this is the default behaviour of event cascading
                    // first the child event will be trigerred and then the parents and then their parents etc...
                    // this only happens incase of similar events set for both parent and decendants

                    // goes from inner to outer (child->parent)


    // Example :
        // Suppose we have click event on : body, div and button (contained in the div)
        // when we click on body only click event on body will get activated

        // when we click on div, the click even on div and body both will be activated
        // a click on div will be a click on body as well, so both click events will be triggered
        // sequence : div -> body

        // when we click on button, the click even on button , div and body all will be activated
        // a click on button will be a div and will be a click on body as well, so all three click events will be triggered
        // sequence : button -> div -> body


        let body = document.body;
        let div_01 = document.getElementById('id_01');
        let button_01 = div_01.firstElementChild;

        function body_click(){
            console.log('body click activated ...');
        }
   
        function div_click(){
            console.log('div click activated ...');
        }
   
        function button_click(){
            console.log('button click activated ...');
        }


        body.addEventListener('click',body_click);
        div_01.addEventListener('click',div_click);
        button_01.addEventListener('click',button_click);



// Event Capturing : Event Capturing is the opposite of Event Bubbbling
                    // through Event capturing we can manually alter the sequence of executin of cascading events
                    //.addEventListener(Event , Function, Event_Capture) : .addEventListener has three parameters
                    // The Event_Capture parameter is by default set to False
                    // If we make it "true" then it will activate Event_Capture

                    // first the parent's event will be trigerred and then its child's and then their child's etc...
                    // goes from outer to inner (parent->child)



    let div_02 = document.getElementById('id_02');
    let button_02 = div_02.firstElementChild;

    body.addEventListener('click',body_click,true);
    div_02.addEventListener('click',div_click,true);
    button_02.addEventListener('click',button_click,true);




// .stopPropagation : To completely stop Event Cascading
                    // stops cascading at the level activated
                    // written inside the function called during an event
                    // the function needs a parameter to be passsed t capture the event to apply the property

    let div_03 = document.getElementById('id_03');
    let button_03 = div_03.firstElementChild;

    function body_click_02(event){
        console.log('body click activated ...');
        event.stopPropagation();
    }

    function div_click_02(event){
        console.log('div click activated ...');
        event.stopPropagation();  // stops propagation of event cascade
    }

    function button_click_02(event){
        console.log('button click activated ...');
        event.stopPropagation();
    }

    body.addEventListener('click',body_click_02);
    div_03.addEventListener('click',div_click_02);
    button_03.addEventListener('click',button_click_02);
            
    





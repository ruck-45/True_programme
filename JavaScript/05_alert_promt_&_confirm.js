// alert( );  prompt( );  &  confirm( );

    // these methods are used to intract with the user.
    // They appear as popups on the browser and freeze the browser until they are delt with
    // until a popup is resolved, the browser and the Js will pause working, and will resume after an action is taken.


    // alert( );

        // It is used to display any information to user.

        // Example :
            alert("Welcome");


    // prompt( );

        // It is used to get urgent input from user.
        // If the user enters a value and clicks ok , then the value can be stored in a variable and can be used later.
        // If the user chooses to ignore prompt by clicking on "cancle" or "Esc" then "null" will be stored in the variable.
        // we can provide a default value in prompt separated by comma from message.

        // Example :
            var age = prompt("Enter Your Age :", 18);
            document.write(age ? `Your age is ${age}` : 'Age not entered');

    
    // confirm( );

        // It is used to confirm a Yes / No answer. Like : submit ? delete ? Log out ? etc...
        // User response can also be stored in a variable for future use
        // if the user chooses "ok" - it returns "True"
        // if the user chooses "cancle" or clicks "Esc" - it returns "False"

        // Example :
                var age = confirm("Are you above 18?");
                document.write(age ? `Welcome` : 'Come back Later');
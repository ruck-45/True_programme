// Strict Mode

    // without strict mode we can initialize variables without declaring them with : let, const or var
    // It is preferably not used as it can cause unnecessery bugs

    // like : 
        t = 7; // will work just fine

        // interpreter will convert it to : 
        var t;
        t = 7;


    // Enabling strict mode will not allow developers to use the variable without declaring it

        'use strict'

        t = 7; // will throw error
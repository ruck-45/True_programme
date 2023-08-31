// Introduction of let & const

// let : 

    // Let is introduced to Js to make it onPar with modern languages for 2 reasons :
    //  - We can redeclare variables declared in var, but in reality redeclaring should throw error for the developer.
    //     So, let has this functtionality as other programming languages.


        var x = 2;
        var x; // redeclared and no error

        let y = 5;
        let y; // Error


    //  - Any variable declared using var is an part of the window-object and can be accessed using it.
    //     let allows us to declare variables that cannot be accessed using window object.

        var a = 5;
        console.log(window.a); // outputs 5

        let b = 7;
        console.log(window.b); // outputs undefined



// const : 

    // - const is introduced to allow initialization of Constants. Variable initialized using var or let can be changed later 
    //     without warning. But changing const gives error. It is important to avoid developers change Constants within the code
    //     by mistake.

    // - const is also like let. It can't be accessed using window object.


        var q = 2;
        q = 5; //allowed


        let r = 2;
        r = 5; //allowed

       
        const t = 2;
        t = 5; // Runtime Error
// Hoisting

    // java script is an only language supporting Hoisting
    // Hoisting is a technique through which we can use undeclared identifiers like (variables, functions, objects) before declaring it
    // Through hoisting the intrepreter of javascript autometically lifts up variable declaration to the top of the program (maintaining same scope)

    // it is generally not advised to use hoisting as it can create unnecessery bugs

    // Example 1: 

        hello(); // wont throw error, because of hoisting

        function hello(){
            console.log('Hello World');
        }

        // because of hoisting, above program changes to : 
        function hello(){ // moved up by intrepreter itself
            console.log('Hello World');
        }

        hello();


    // Example 2:

        x = 7;
        console.log(x); // will output 7
        var x;

        // because it changes to : 
        var x;
        x = 7;
        console.log(x);


    // Example 3 : 
        
        console.log(x); // will output undefined
        x = 7;
        var x;

        // because it changes to : 
        var x;
        x = undefined; // if x is declared using var , this line is autometically added by the intrepreter
        console.log(x);
        x = 7;


    // Example 4 : 
        
        console.log(x); // will output undefined
        var x = 7;

        // because it changes to : 
        var x;
        x = undefined;
        console.log(x);
        x = 7; // Hoisting only lifts up the declaration part, leaving the initialization part as it is


    // Example 5 : 
        
        console.log(x); // will throw error
        let x = 7;

        // because it changes to : 
        let x; // the part x = undefined; doesnt happen in let/const so, it will throw initialization error
        console.log(x);
        x = 7;




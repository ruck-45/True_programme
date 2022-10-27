// Function

// Synatx

    function Function_name( parameters ){
        code;
    }


// The arguments Object

    // A function in javascript comes with a default arry called arguments
    // The arguments array keeps all the aruments passed to the function, wheather it has that much parameters or not

    // Example : 

        function fun(num){
            console.log(arguments.length);
        }

        fun();  // : 0
        fun(1);  // : 1
        fun(1,2); // : 2
        fun(1,2,3,4,5); // : 5


    // We can use arguments as *args in python

    // Example

        function add(){
            
            if(arguments.length == 0){
                console.log('No input received');
            }
            else{
                let sum = 0;
                for(i=0;i<arguments.length;i++){
                    sum += arguments[i];
                }
                console.log(`sum : ${sum}`);
            }
        }

        // above prgram can add any number of inputs

        add(1,5,64); // : 70
        add(); // : 'No input received'
        add(7,'5'); // : '75'


// Storing a function in a variable

    // we can store a function in a variable and still use it

    // Example : 

        // Take example of abobe add() function
        // We can store it in a variable

        let addition = add;
        addition(4,5,6); // : 15


// Return

    // We can write return to return values out of functions
    E.g : return arr;

    // If nothing is returned , then 'undefined' is returned by default.


// Anonymus Function : function with no name

    // If we dont provide funtion name in normal situations it will throw an error
    // But Anonymus functions can be of use in some cases

    // Example : 

        // 1. Function expression : 
            // if we plan on storing the function in a variable , why bother giving it a name
            // Below statement is known as a function statemant

            let fun = function (){
                console.log('Hello world');
            };


        // 2. One time use function

            // A function is created for situations for the code to be used again and again
            // But if a function is required but its usage is for single time then we can use anonymus functions

            // Example : 

            // setTimeout(function,time in ms) : takes a function and delays its execution by given time
            // if we need a specific code to execute in some delay, but setTimeout() takes only functions
            // So, we need to create a function for one time usage

            // like:

            function abc(){
                code;
            }

            setTimeout(abc,3000);

            // Instead of assigning an identifier to the block of code and let it be stored in the memory, we can directly pass an Anonymus function

            // like:

            setTimeout(
                function (){
                    code;
                }, 3000
            );


// Immidiately Invoked Function

    // A function which is called as soon as declared
    // An anonymus function can be an immidiatelly invoked function

    // Example : 

        (function (){
            console.log('Hello world');
        }) () ;

    // Immidiately invoked functions have a lot of use cases
    // But the most important is to resolve third party code conflicts

    // Example : 

        // suppose we have included some 3rd party codes in our script
        // But we are unaware about what identifiers they have used
        // If accidently we use the same identifier it will raise an error
        // Also most of the time we dont go through thousands of lines of codes of third party
        // So a solution is immidiately invoked function


        // 3rd party code : 
            let message = 'Third party message';
            console.log(message);

        // Our code : 
            let message = 'welcome back'; # will create conflict
            console.log(message);

        // Solution :  immidiately invoked functions 

            (function (){
                let message = 'Third party message';
                console.log(message);
            }) () ;

            let message = 'welcome back';
            console.log(message);
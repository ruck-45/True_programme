// Comments

    // single line comment

    /* Multi
    line
    comment */


// Statement


    // Js statements similar to C statements.
    // They finish with semicolon ( ; )


// Identifiers


    // Keywords cannot be used as identifiers
    // Identifier name can start with : 
    // Any letter ( A-Z or a-z )
    // A dollar sign ( $ )
    // An underscore ( _ )
  

// Data Types


    // In Js there are 5 different types of Data types – that can contain values :

        // 1.	String : character / set of charecters
        // 2.	Number : int or float
        // 3.	Boolean : true / false
        // 4.	Object : Dictionary from Python
        // 5.	Function


    // There are 2 data - types that cannot contain values : 

        // 1.	Null
        // 2.	Undefined : when a variable is declared but not initialized


    // There are 6 types of objects in Js :

        // 1.	Object
        // 2.	Date
        // 3.	Array
        // 4.	Number
        // 5.	Boolean


// Variables in Js


    // Keywords used to define a variable in Js :


        // var 
            // It was in use before the ES6 came out.
            // It doesn’t need a datatype.
            // It can redeclare same variables without throwing any error
            // It has a global scope, i.e. variable declared inside a block ( function { block } ) can be accessed outside the block. 

            // Example : 
                // var x; 
                // var num_01 = 2;

            // We can initialize before declaring a variable using var

            // Example :
                // x=10;
                // var x;
        

        // let
            // Its an alternative of “var” came into use after ES6.
            // Functions similar to “var”.
            // But redeclaring same element in same block/ scope will throw error.
            // The scope of let is “block-level” unlike “var”. A variable inside a block cannot be accessed outside the block if it is declared using let.
            // We cant initialize before declaration like var.

            // Example : 
                // let x = 5; 
                // let $temp;


        // const
            // used to declare constants.
            // const can be used to declare constant numbers, strings, arrays, objects etc..
            // in case of numbers, strings  the value cannot be changed further in code.
            // In case of constant arrays, the elements can be changed , added , removed , but the array cannot be redeclared.
            // Same goes for constant objects,  the properties can be changed but the object cnnot be redeclared again.
            // The scope of “const” is same as “let”, block level scope.
            // We cant initialize before declaration like var.

            // Example : 
                // const x = 5;

            // Redeclaring an existing “var” or “let” variable to “const” is not allowed.

            // Example:
                // var x = 45;
                // const x = 10;  // ERROR
        

        // Note : 
            // We can redeclare a variable if it has been declared using “var”. It will not loose its initial value.
                // Example : 
                // var x = 10;
                // var x; // Here x will still retain the value 10	
        
            // But It doesnot work that way with : “let” and “const”.
        
         
// Operators


    // Arithmatic - operators

        // +  : addition / also used to concat strings
        // –  : substraction
        // *  : multiplication
        // /  : division
        // **  : exponent
        // %  : reminder

        
    // Assignment - operators

        // =  : assign right hand value
        // +=  : add right hand value and then assign
        // -=  : substract right hand value and then assign
        // *=  : multiply right hand value and then assign
        // /=  : divide right hand value and then assign
        // %= : reminder after dividing with right hand value and then assign
        // **= : raise to the power of right hand value and then assign
        

    // Increment & Decrement - operators

        // ++  : can be pre and post increment , increases value by one
        // --  : can be pre and post decrement, decreases value by one
        

    // Comparison - operators

        // == : equal ( converts both side to string and then compares, 5 == ‘5’ will return true here )
        // === : equal in value and type ( its strict comparison )
        // != : not equal
        // !== : not equal value or not equal type
        // > : greater then
        // < : less than
        // >= : greater than or equal
        // <= : less than or equal
        // ? : ternary operator
        

    // Logical - operators

        // && : logical and
        // || : logical or
        // ! : logical not
     
        
    // Bitwise - operators

        // & : bitwise and – binary AND operation
        // | : bitwise or – binary OR operation
        // ~ : bitwise not – binary not operation (complement) 
        // ^ : XOR - binary XOR operation
        // << : left shift – bits moved left to most significant side, empty bits filled with 0
        // >> : right shift – bits moved right to least significant side, , empty bits filled with 1
        // >>> : unsigned right shift – bits moved right to least significant side, , empty bits filled with 0
        

    // Type - operators

        // typeof : returns the type of variable. Output is a datatype name.
            // Example : typeof x;

        // instanceof : returns true if an object is an instance of an object type. Output is Boolean type.
        

// Escape Sequences

    // \’ : single quote , used to give single quote inside a string declared using single quote 
    // \” : double quote , used to give double quote inside a string declared using double quote
    // \\ : backslash
    // \n : new line
    // \b : backspace
    // \t : horizontal tab
    // \v : vertical tab
    // \f : form feed
        
// Type Conversion

    // Most of the user inputs come in form of String.
    // So its important to check and convert to desired data - type to use the value effectively.

    // Implecit : by the compiler

        // compiler uses its intelligence to autometically convert datatypes to suit operations.
        // Example :
            // let x = "5" + 2; // '52' , string
            // let x = "5" - 2; // 3 , number
            // let x = "5" * 2; // 10 , number
            
            // let x = 5 + null; // 5 , number
            
            // let x = 5 - "yes"; // NAN (Not A Number type) , number

            
    // Explicit : by the coder

        // Explicitly we can change data-type by 3 ways :

        // 1. Number( );
            // changes data-type to number.
            // it changes : // true - 1 
                            // false - 0

                            // numerical strings - numbers
                            // non-numerical strings - NAN (Not A Number)

            // Example :
                // let x = "hello";
                // console.log(typeof x);      // string
                // console.log(Number(x));     // NAN
                // console.log(typeof Number(x));      // Number

        // 2.String( );
            // changes all data-types to string

            // Example :
            // let x = null;
            // console.log(typeof x);      // object
            // console.log(String(x));     // null
            // console.log(typeof String(x));      // String

        // 3.Boolean( );
            // changes data-type to boolean.
            // it changes : // blank string - false 
                            // non-blank string - true

                            // 0 - false
                            // numbers except 0 - true

            // Example :
            // let x = "";
            // console.log(typeof x);      // String
            // console.log(Boolean(x));     // false
            // console.log(typeof Boolean(x));      // Boolean



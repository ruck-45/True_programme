// Different ways to Print Message


    // alert( message ) ;  // writing into an alert box

        // We can make browser to show a message using the alert box using this. 
            
        // Example :   

            alert("hello world");
            // alert(5+6);


    // document.getElementById("id").innerHTML = message;   // writing into an HTML element by using “innerHTML”

        // To access an HTML element we can use : document.getElementById("id") method.
        // The message given here will replace the element in the HTML file, upon execution.
            
        // Example :  

            document.getElementById("id_01").innerHTML = 5+6;
            // ( here Js will replace the contents in the heading tag having the id = “head_01” with “Hello world” )


    // document.write( message );  // used for testing purpose

        // This will put the message where the script tag belongs in HTML document.
            
        // Example :  

            document.write( "Hello World" );
            // ( here Js will insert “Hello world” at the position the script tag was present in the HTML file. )

    // console.log( message );  // used for debugging purposes

        // This will display the message in the browser console.
        // It wont  affect the HTML file. It is primarily used for checking and debugging.
            
        // Example :  

            console.log("Hello World");
            // ( here Js will output “Hello world” at the browser console. )




//Template literal: 


   // We can make complex output having multiple data types using this method
        
   // Example :
   
        let x = 10 , y = "Henry";
        document.getElementById("id_02").innerHTML = `${y} scored ${x} out of 10 in history.`;
        // Make sure to quote the message using tilt ( ` ) , [below the escape key].
        // ${ variable } is the syntax to include the variable.

// Loops


    // while – loop

        // syntax : 
            // while ( condition )
            // {
            //     Code;
            // }


    // do while – loop

        // syntax : 
            // do
            // {
            //     Code;
            // } while ( condition ) ;


    // for – loop

        // syntax : 
            // for ( i = start; i <= end ; i++ )
            // {
            //     Code;
            // }


// break – keyword 
    // terminates iteration /  flow of control.

// continue - keyword
    // skips current iteration and starts with next iteration.


// labels in break and continue 

    // we can use labels to access loops in different levels to respond to a break/continue statement 
    // Example :

        // for(var i=0; i<=10; i++)
        // {
        //     for(var j=0; j<5; j++)
        //     {
        //         if(i-j == 7)
        //         {
        //             break;
        //         }
        //         document.write(`hello ${i} - ${j}`);
        //     }
        // }

        // here as soon as i=7,8,9,10 and j=0,1,2,3, the inner for loop will stop , but the outer for loop again start with the next iteration.

        outer: for(var i=0; i<=10; i++)
        {
            for(var j=0; j<5; j++)
            {
                if(i-j == 7)
                {
                    break outer;
                }
                document.write(`hello ${i} - ${j}`);
            }
        }

        // here as soon as i=7 and j=0 the the outer loop will stop working as the break is for the label- "outer".
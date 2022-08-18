// strings 


    // collection of charecters
    // they are immutable

    // indexing

        // the indexing in string starts from 0 from left and -1 from right
        
        // Example : let str = "Hello"; 

        //         H = 0, e = 1, l = 2, l = 3, o = 4
        //         H = -5, e = -4, l = -3, l = -2, o = -1

        //         str[-1] -> o
        //         str[3] -> l


    // String slicing

        // string slicing can be done in 3 ways :

            // str.slice( start_index , end_index );
                // ex : str.slice ( -5 , -1 );
            
            // str.substring( start_index , end_index );
                // it is similar to .slice( ); , but it cannot accept negative values.

            // str.substr( start_index , slice-length );
                // it is similar to .slice( ); , but second parameter takes the length of the extracted-part.
    
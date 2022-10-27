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
            

    // String Operations

        // + : concatinates string
    
    // String Methods

        // let s = 'HARSH';

        // s.length : length of the string
        
        // s.concat(a,b,c) : concatinates strings
        
        // s.substr(start_index,length) : returns a substring in the string
        // s.substring(start_index,end_index) : same work as .substr()

        // str.slice( start_index , end_index ) : same as substring , ex : str.slice ( -5 , -1 );
        
        // s.indexOf( char/substring , start_index ) : provides the first occurance index of a charecter or substring after the position provided
                                                        //  (from left to right), -1 if not present
        // s.lastIndexOf( char/substring , start_index ) : same as indexOf , but from right to left (backwords), -1 if not present
        
        // s.trim() : trims spaces from both ends
        // s.trimStart() : trims spaces from start
        // s.trimEnd() : trims spaces from end
        
        // s.toUpperCase() : converts to uppercase
        // s.toLowerCase() : converts to lowercase

        // s.replace( char/substring_1 , char/substring_2) : replaces first instances of the char/string_1 with char/string_2
                                                            // to replace all instances use a regular exp with global modifier
                                                            // E.g : let text = "Mr Blue has a blue house and a blue car";
                                                            // text.replace(/blue/g, "red") replaces all 'blue' to 'red'
        // s.includes( string/char ) : checks if the string/char is present in s
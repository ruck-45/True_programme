// Math Object

    // Constants

        Math.PI; // value of PI
        Math.E; // value of Euler's number
        // etc..


    // Methods

        Math.round(); // rounds the numbers
        Math.ceil(); // gives immidiate upper whole number of a fraction
        Math.floor(); // gives immidiate lower whole numberof a fraction
        
        Math.trunc(); // removes the decimal point and returns the whole number part

        Math.pow(2,3); // 2**3 , power

        Math.sqrt(); // finds square root

        Math.min(); // gives minimum out of all numbers
        Math.max(); // gives maximum out of all numbers

        Math.random(); // provides a random number between 0 to 0.9999..
                       // formula to generate random number between a range : 
                       Math.floor(Math.random() * (upper_limit - lower_limit)) + lower_limit;
                       Example : Math.floor(Math.random() * (25-15)) + 15; // between 15 to 25

    
// Date Object

    // Date is difficult to manage as there are different formats
    // Date Object is used to unify all diverse date formats

    // Initializtion

        let x = new Date(); // will strore current system date
        let x = new Date(Year, Month, Date, Hour, Minute, Second);
            // Year and month is necessery to define a date object
            // Others are optional
            // The month starts form 0(Jan) - 11(Dec)
            Ex - let x  = new Date(2018,3,12);  // Thu Apr 12 2018 00:00:00 GMT+0530 (India Standard Time)
        
        // We can also initialize with some accepted strings by Date() object

        let x = new Date('2018-01-15');
        let x = new Date('01/15/2018');

    // Methods

        // To get informations

        x.getTime(); // Provides unix time

        x.getFullYear(); // Provides Year
        x.getMonth(); // Provides Month
        x.getDate(); // Provides Date
        x.getHours(); // Provides Hours
        x.getMinutes(); // Provides Minutes
        x.getSeconds(); // Provides Seconds
        x.getMilliseconds(); // Provides Miliseconds

        x.getDay(); // Provides name of week Days
                    // 0(Sunday) - 6(Saturday)

        // To set informations

        x.setFullYear();
        x.setMonth();
        x.setDate();
        x.setHours();
        x.setMinutes();
        x.setSeconds();
        x.setMilliseconds();

        x.setTime(); // Sets the entire time through unix seconds


        




        
        



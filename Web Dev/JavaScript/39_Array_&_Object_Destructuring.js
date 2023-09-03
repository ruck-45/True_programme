// Destructuring

    // Instead of strong element of an iterable one by one, we can store them at a tiem in multiple variables using Destructuring


    // Array Destructuring
        let arr1 = ['Ghoosebumps','Horrorlands','R.L.Stine',180,250];

        // Normal way of destructuring
        let BookName = arr1[0];
        let SeriesName = arr1[1];
        let Author = arr1[2];
        let Pages = arr1[3];
        let Price = arr1[4];

        // Array Destructuring ES6

        let[bookName, seriesName, author, pages, price] = arr1;

        let[bookName1, seriesName1, author1, pages1] = arr1 ;
                                    // If we provide less variables to destructure, it will only destructure for only those variables
                                    // Here pages1 stops destructuring at 180

        let[bookName2, seriesName2, author2, pages2, price2, publication2] = arr1 ;
                                    // If it has more variables to destructure than available, 
                                    // Then it stores undefined in unavailable variables
                                    // publication2 --> undefined

        let[bookName3, seriesName3, author3, pages3 = 200, price3, publication3 = 'ScholarStick'] = arr1 ;
                                    // We can provide default values in case the array doesn't has a value for the variable
                                    // here since publication3 has no value from arr1 so it will be 'ScholarStick'


        let[bookName4, seriesName4, ,pages4, price4] = arr1 ;
                                    // If we skip a variable in the middle, then the destructuring will skip it too
                                    // Here after seriesName , author is skipped


        // Multidimentional array Destructuring

        // We can destructure multidimentional arrays too. We have to set up the variables the same way the array is structured.

        let arr2 = ['Ghoosebumps', 'Horrorlands', 'R.L.Stine', 180, 250, ['Scholastic',2001]];

        let[bookName5, seriesName5, author5, pages5, price5, [publication, year]] = arr2;
                                        // Here publication --> 'Scholastic' and year --> 2001



    

    // Object Destructuring

        // It is similar to array destructuring
        // But we have to provide the key name(mandatory) for destructuring
        // syntax : let {key1 : variable1 , key2 : variable2, key3 : variable3 } = Obj

        // If variable name is not given the variable is formed by the name of the key.


        let Ob1 = {name : 'Ghoosebumps', series: 'Horrorlands', writer: 'R.L.Stine', page: 180, money: 250};


        // Destructuring: 

        let {name, series, writer, page, money} = Ob1;
                                // Here the variables will be created by the key names : name, series, writer
                                

        let {name: book_name, series: series_name, writer: Writer, page: Page, money: Money} = Ob1;
                                // If we provide variable name, it will create variables with the given names instead of the keys
                                // Here the variables will be : book_name, series_name, Writer, ...


        let {name: book_name1, series: series_name1} = Ob1;
                                // it will only destructure for the keys we have requested for


        let {name: book_name2, series: series_name2, writer: Writer2, page: Page2, money: Money2, publisher: Publisher2} = Ob1;
                                // If the key requested is not present then it will retain the value "undefined"
                                // Here Publisher2 --> undefined

        let {name: book_name3, series: series_name3, writer: Writer3, page: Page3, money: Money3, publisher: Publisher3 = "Scholastic"} = Ob1;
                                // If we define a default value, then if the key is not found, it retains the default value
                                // Here Publisher3 --> "Scholastic"

        
        
        // Multidimentional Object Destructuring

        let Ob2 = {name : 'Ghoosebumps', series: 'Horrorlands', writer: 'R.L.Stine', page: 180, money: 250, 
                    Publisher : { publisher_name : 'Scholastic', year : 2001}};
        

        let {name: book_name4, series: series_name4, writer: Writer4, page: Page4, money: Money4, Publisher : {publisher_name : Publisher4, year : Year4}} = Ob2;
                        // Here Publisher {} is a nested Object, we can destructure it following the same pattern
                        // Here Publisher4 --> Scholastic and Year4 --> 2001
// Templet Literal

    // Previously we can initialize a string using : '' (single quote) & "" (Double quote)
    // But it had some limitations and it was solved by initializing string using  ``  (backtick)
    
    // 1. No need to use escape sequence, `` represents string as written in code editor.

    console.log("There is a \n cat");
    console.log(`There is a 
    cat`); // gives same result as \n as we physically gave it a new line
        // The text will appear exactly written in the code editor



    // 2. we no longer have to convert variables to string to print with strings. with help of `${}`, we can include variables easily

    let age  = 18;
    console.log("My age is " + String(age));
    console.log(`My age is ${18+3}`); // give similar result, we can also perform operations in it.
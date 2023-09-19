// Css Manipulation (get & set)

    // .css() : 
        // .css("--css property name--") -  // gets value of specified css property of the selected element
        // .css("--css property name--", "--css property value--") - // sets given value for specified css property of the selected element


    // we can also set multiple css property at a time for the same
    $("#id1").css({
        "background-color" : "red",
        "border" : "10px solid black",
        "border-radius" : "10px"
    });



// Height and Width (get and set)

    // There are 4 kinds of dimensions : 
        // 1. height, width : original dimensions of the element
        // 2. innerHeight, innerWidth : OG dimensions + 2*padding (one on each side)
        // 3. outerHeight, outerWidth : innerDimensions + 2*border
        // 4. outerHeight(true), outerWidth(true) : outerDimensions + 2*margin



    // .width() : OG width of element
    // .height() : OG height of element

    // .innerWidth() : OG width of element + 2*padding (for left and right)
    // .innerHeight() : OG height of element + 2*padding (for top and bottom)

    // .outerWidth() : innerWidth of element + 2*border (for left and right)
    // .outerHeight() : innerHeight of element + 2*border (for top and bottom)

    // .outerWidth(true) : outerWidth of element + 2*margin (for left and right)
    // .outerHeight(true) : outerHeight of element + 2*margin (for top and bottom)



    // We can set all above properties by passing a number as an argument
    // But it will only affect the original width and height, and border,margin,padding will remain unaffected
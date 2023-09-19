// HTML Manipulation
    // we can maipulate various attributes / properties of html elements
    // some of them are given below



// Content Manipulation (get and set)

    // .text() : 
            // .text() -  // To get all text written inside a tag
                          // This also returns all text included inside the children tag (combined)
                          // if more than one element are represented by the selectors, it will combine their text
                          // it gives text as it is represented in the HTML document (with all spaces, tabs and newline)
            // .text("--text--") - // sets given text inside the selcted html element
    
    
    // .html() : 
            // .html() -  // gets html code inside the selected element
            // .html("--html code--") - // sets given html code inside the selcted html element
    
    
    // .val() : input tag
            // .val() -  // gets value of the selected input tag
            // .val("--value--") - // sets given value for the input tag



// Attribute Manipulation (get and set)

    // .attr() : 
        // .attr("--attribute name--") -  // gets value of specified attribute of the selected element
        // .attr("--attribute name--", "--attribute value--") - // sets given value for specified attribute of the selected element


    // we can also set multiple attributes at a time for the same
        $("#id1").attr({
            "class" : "black",
            "id" : "id2",
            "name" : "name1"
        });



// class manipulation

    // .addClass("--class name--") : adds the class name to class attribute
                                    // we can also add multiple class at once 
                                    $("input").addClass("red smooth")
    
    // .removeClass("--class name--") : removes the class name from the class attribute
                                        // we can also remove multiple class at once 
                                        $("input").removeClass("red smooth")
    
    // .toggleClass("--class name--") : adds/removes (toggles) the class name to class attribute
                                        // we can also remove multiple class at once 
                                        $("input").toggleClass("red smooth")




// Adding HTML element

    // we can add HTML elements/code in 4 different places of a selected element


    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // <!-- before -->

    // <ul> -----------------------------> targeted element
    //     <!-- prepend -->
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <!-- append -->
    // </ul>
    
    // <!-- after -->


    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



    // .append("--HTML code--") : adds html code after the last child of the element
    // .prepend("--HTML code--") : adds html code before the first child of the element

    // .after("--HTML code--") : adds html code just before the element
    // .before("--HTML code--") : adds html code just after the element



// Removing HTML elements

    // .empty() : removes all children of the selcted element
    // .remove() : removes the selected element

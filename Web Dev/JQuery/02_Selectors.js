// Selctors

    // We can use all CSS selector techniques tos elect elements in jQuery
    // Syntax : $("--Selector--")

    // $("*") :                          selects all elements
    // $("p") , $("div") , $("a") :      selects all elements related to resp. tags
    // $(".class") :                     selects all elements belonging to that class
    // $("#id") :                        selects element belonging to that id

    // $("div.class1>p") :               hybrid selectors like we use in css


    // We can store the selected elements in variables and later use them as well
        let ele = $("#id1");
        ele.hide();

    // If the selector selects multiple elements, attaching events on the variable, applies to all the selected element individually
        // We donot have to iterate them manually
        $('image').click(function(){ // applies Evnet to each element selected
            $(this).hide();
        });


    // If the selector selects multiple elements, we can choose a perticluar elament through indexing
        let divs = $('div');
        divs[4].hide();




// this Selector

    // It is a special type of selector used to access the current element in events
    // Syntax : $(this)

    // This follows the same Anonymous Vs. Arrow function behaviour as seen in Js
// Accessing Parent

    // .parent() : selects immidiate parent of the element
    // .parents() : selects all parents of the element till the HTML tag (parent --> parent's parent --> ... --> body --> html tag)
    // .parentsUntil("--selector--") : selects all parents of the element untill the specified element
                                // the specified element is not included
                                // the selector accepts all css selector properties




// Accessing Children

    // .children() : selects all DIRECT / immediate children of the element
    // .find("--selector--") : looks for and selects element with the specified selector inside the current element
                            // it only looks inside the element it is applied on




// Accessing Siblings

    // .siblings() : selects all siblings of the selected element (both before and after)
                    // doesn't include the element itself

    // .next() : selects the sibling after the current element (one)
    // .nextAll() : selects all siblings after the current element
    // .nextUntil("--selector--") : selects all siblings after the current element untill the specified element

    // .prev() : selects the sibling before the current element (one)
    // .prevAll() : selects all siblings before the current element
    // .prevUntil( "--selector--") : selects all siblings before the current element untill the specified element


// Chaining

    // we can chain above methods to access our desired element
    $("#id1").next().next().children();
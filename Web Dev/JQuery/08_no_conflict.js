// No Conflict

    // It may be possible that we are using a different framework that has some functionalities associated with "$"
    // So we wont be able to use "$()" with jQuery as it will create conflict

    // to get over the conflict we have $.noConflict()



$.noConflict(); 
// This statement frees the functionalities of "$" from jquery
// Now we won't be able to access elements using : "$()"

// By default we can replace "$" with "jQuery" if noConflict is enabled 
jQuery("#id").click();


// or to use custom we can assign a variable: 
let jq = $.noConflict();
jq("#id").click();
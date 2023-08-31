// Storage

    // We can store user information client side ib various ways : 
        // Cookies
        // Local storage
        // Session storage
    
    // One common example of its application is when we go to a site and do a selection of an item and add it to a cart
    // we haven't set up any accounts , but still it remembers our selection the next time we visit the site
    // this can be done using above storage methods



    // All these storage methods are primerily client side and look to store relevant information in the web browser
    // For the next time we load into the site, it reads them and takes relevent action on them .
    //  like : 
        // remembering last encounter
        // showing personalized ads and relevant information according to the events


    // each one of methods are different in their own way.
    // Below summerizes the differences

    //                          Cookies                 Local Storage       Session Storage
    // 
    // Capacity :               4kb                     10 MB               5 MB
    // Browser-support :        HTML5/4                 HTML5               HTML5
    // Expires :                Manually-set            Never               On end of session/ Close of Tab
    // Accessible from :        Any-Window              Any-Window          Same-Tab
    // Storage-Location :       Browser and Server      Browser only        Browser only
    // Sent with requests :     Yes                     No                  No



    // Their details can be viewed in inspect mode of a browser >> Application




// Cookies : 
    
    // It has a capacity of 4kb for each cookie ( with a max of 20 allowed cookie per site )
    // Since it was already present , so it is supported by HTML4 and HTML5 browsers
    // We can set the expiry date & time manually, so when the time expires, it removes the cookie from the browser
    // The cookie can be stored in just web browser or both in browser and server, we also recive cookies from server during requests
    // cookies for a site can be accessed from any window of the browser as it is universal for the browser

    // It is a Name-Value Pair with various metadata with it

    
    // Creating a cookie
    document.cookie = 'item = milk'; // expires when session ends by default
    document.cookie = 'location = hyderabad; expires =Mon,04 Sept 2023 18:00:00 UTC'; // will expire on given date
                                    // We can also custom set domain, path & secure etc..

    
    // Modifying a cookie
    document.cookie = 'item = bread, Jam; expires =Thu,07 Sept 2023 18:00:00 UTC'; // modified the cookie with name item



    // Deleting a cookie
    document.cookie = 'location = hyderabad; expires =Wed,23 Aug 2023 18:00:00 UTC'; // set the expiry date to past


    // Reading a cookie
    console.log(document.cookie) // item=bread, Jam
                                // we can access the cookie using document.cookie




// Local Storage

    // It has a capacity of 10 MB per application
    // The data is stored in a format of key-value pair
    // The data is stored in Borwser only and has no request interactions
    // It has no expiration time and can be accessed from any window of the browser because it is universally present
    // was introduced and used by HTML5 browsers
    

    // Creating local Storage: 
    localStorage.setItem("Name",'Bill');
    localStorage.setItem("Age",15);

    // Update Local storage
    localStorage.setItem('Name','Maddy'); // we overwrite the key

    // Read local storage
    console.log(localStorage.getItem("Name")); // Maddy

    // Delete local storage
    localStorage.removeItem("Age");





// Session Storage

    // It has a capacity of 5 MB per application
    // The data is stored in a format of key-value pair
    // The data is stored in Borwser only and has no request interactions
    // It expires as soon as the session/tab is closed, and it can only be accessed through that particular tab
    // was introduced and used by HTML5 browsers


    // Creating session Storage: 
    sessionStorage.setItem("Name",'August');
    sessionStorage.setItem("Age",32);

    // Update session storage
    sessionStorage.setItem('Name','Andy'); // we overwrite the key

    // Read session storage
    console.log(sessionStorage.getItem("Name")); // Maddy

    // Delete session storage
    sessionStorage.removeItem("Age");

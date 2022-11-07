// We can create popups using window object


    let google_popup = document.getElementById('g_pop'); // capturing the button to add functionality of popup
    let yahoo_popup = document.getElementById('y_pop');
    let close_btn = document.getElementById('close_pop');

    let win; // a variable declared to store the new window object created

    let url = 'https://www.google.com/'; // it redirects the new opened window tab to mentioned address
    let window_name = 'pop_up'; // it is the name of the window to keep track of the window (to manipulate or delete it)
    let properties = 'height = 500, width = 300'; // properties of newly opened window
                                                  // other properties can be found in internet

    // some properties include : 
        // height
        // width
        // popup :  sets default popup settings
        // top
        // left
    
    google_popup.addEventListener('click',function(){
        win = window.open(url,window_name,properties) // opens a new window, takes 3 parameters
    });                                               // here win captures the window object

    yahoo_popup.addEventListener('click',function(){
        window.open('https://in.search.yahoo.com/?fr2=inr',window_name); // since we have used the same window name, it will just update that window
    });                                                                  // using a different window name will trigger a second popup

    close_btn.addEventListener('click',function(){
        win.close(); // closes the popup
    });
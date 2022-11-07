// Location object
    // it is used to get information or manipulate current url
    // it has many properties and methods, can be searched on internet

    location.href; // current url
    location.pathname;
    location.hostname;
    location.protocol;
    location.port;


    // setting current URl : changes the current page url and loads the new url

        // methods that leave a record in history

        window.location = 'https://www.google.com/'; // or
        location.href = 'https://www.google.com/'; // or
        location.assign('https://www.google.com/');

        // method that doesnt leave a record in history

        location.replace('https://www.google.com/');


    // Reloading

        location.reload();
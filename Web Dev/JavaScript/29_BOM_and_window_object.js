// BOM : Browser Object Model
    // In BOM we will see that hw to interact with the browser


// Window Object 
    // window object represents the window of the browser
    // using window object, we can monitor/modify various browser properties

    // All global functions, variables and javascript objects autometically become member/property of window object
    // Note : 
        // only the global variables become member of window object
        // only variables declared using var keyword can be member of window object
        // variables declared using let keyword cannot be members of window object


        var x = 10;
        let y = 50;

        console.log(window.x); // same as console.log(x) 
        console.log(window.y); // will utput : undefined as y is declaed using let and is not a member of window object


        // example of functions : 
        function xyz(){
            console.log('Hello ... ');
        }

        window.xyz(); // same as xyz();

        // functions like alert(), prompt() etc are by default members of window object

        window.alert(); // same as alert()
        window.prompt(); // same as prompt()



// Inner and outer height
        // window object has two types of heights/widths : inner and outer
        // inner : dimentions of visible viewport (can change if some ui of web browser is opened like : inspect, will also depend on size of browser window)
        // outer : dimentions of the web browser opened (can change by changing the web browser window size)

        // helps us get information on type of state user's browser is in

        window.innerHeight // : viewport height
        window.innerWidth // : viewport width
        
        window.outerHeight // : browser height
        window.outerWidth // : browser width
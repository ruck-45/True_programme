// Event Emitters

  // It is a class that takes a string to register an event and then we can emit that event whenever it is necessery
  // They listen for a specific event and take action when they are emmitted in async manner

    const EventEmmitter = require("events");
    const event = new EventEmmitter();

    // registring an event to be listend to
    event.on("equal", (a, b) => {
      // listners of a particular events
      console.log(`${a} is equal to ${b}`);
    });

    event.on("smaller", (a, b) => {
      console.log(`${a} is smaller than ${b}`);
    });

    event.on("greater", (a, b) => {
      console.log(`${a} is greater than ${b}`);
    });

    let a = 10;
    let b = 5;

    if (a > b) {
      event.emit("greater", a, b); // emmitters of a particular event
    } else if (a < b) {
      event.emit("smaller", a, b);
    } else {
      event.emit("equal", a, b);
    }

  // We can place an emmitter above a listener, but it won't work as the listner is declared below emitter and Js is a synchronous language
    event.emit("message");
    event.on("message", () => {
      console.log("New message"); // Not desplayed as the emitter is above the listner
    });


    // We can add different functionalty to same event separately and it will still function fine
    event.on("endless",(num)=>{ // doesn't trigger if no argument is passed
      for(let i = 0;i<num;i ++){
        console.log(i)
      }
    })

    event.on("endless",()=>{
      console.log("endless is coming")
    })

    event.emit("endless",3);


  // Event emmitter is not directly used but a lot of modules use event emmitter 
  // The top one on the list is 'http' module, its createServer() method listens to an event called 'request' and acts on it

    const http = require('http');

    const server = http.createServer();

    server.on('request',(req,res)=>{ // http extends events module and uses events emmitter 
      res.end("Dummy text")
    })

    server.listen(5000,()=>{
      console.log("server is listening on port 5000")
    })
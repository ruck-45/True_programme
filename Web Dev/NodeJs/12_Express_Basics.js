// Express makes Backend management easy and accessible

// Important Express methods

  // app.get() : listen to get request
  // app.post() : listen to post request
  // app.put() : listen to put request
  // app.delete() : listen to delete request
  // app.all() : listen to all requests (get/post/put/delete/...)
  // app.use() : for setting up middlewares
  // app.listen() : listen for request at sprcified port


// Express app example

  const express = require("express");
  const path = require("path");

  const PORT = 5000;

  const app = express();

  app.use(express.static("./static")); // middleware that serves all required files in static folder without ay setup required for them

  // Home Page
  app.get("/", (req, res) => {
    const content = "<h1>Home Page</h1>";
    res.header({ secret: 1224 }); // to add information to response header
    res.status(200).send(content); // status is used to add status code and send is to send data
  });

  // About Page
  app.get("/about", (req, res) => {
    const content = "<h1>About Page</h1>";
    res.header({ secret: 1224 });
    res.status(200).send(content);
  });

  // Secret Page
  app.get("/1224", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./test/index.html")); // sendFile is used to send a file as data, it takes absolute path
  });

  // Leaderboard Page
  const leaderboardData = require('./assets/leaderboard.json');
  app.get('/leaderboard',(req,res)=>{
    res.status(200).json(leaderboardData); // json() method is used to send data that support json format (it uses json.stringify() method to convert the data)
  });

  // Error Page
  app.all("*", (req, res) => { // all represents every incoming request that has not been addressed above
    const content = "<h1>Resource Not Found</h1><a href='./'>home page</a>";
    res.status(404).send(content);
  });

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
  });



// Advantage

  // The biggest advantage is to have a static folder that contains any resourse that doesn't change
  // Express sets up the routes for each resource and serves them whenever the request comes

  // Note : Express is set to serve index.html to home page if it is found in static folder

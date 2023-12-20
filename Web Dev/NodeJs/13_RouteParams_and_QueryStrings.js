const express = require("express");

const app = express();
const PORT = 5000;

const isInt = (num) => {
  let status = false;
  let number = undefined;

  if (!isNaN(num) && Number.isInteger(parseFloat(num))) {
    status = true;
    number = parseFloat(num);
  }

  return [status, number];
};

const leaderboardData = require("./assets/leaderboard.json");

// Route Params

  // Route Params are used for providing placeholders for specific directory in the URL
  // We can access all route params in res.params object
  // There is no limitation on how to use params , Like : /leaderboard/user/:userId/hobby/:hobbyID
  // Poute params are part of the URL, i.e, if we enter url without the rout params, the url will not get accepted by the server

    app.get("/leaderboard/user/:userId", (req, res) => {
      const { userId } = req.params;

      const [status,id]  = isInt(userId);
      let userData = undefined;

      if(status){
        userData = leaderboardData.filter((data) => data.id === id)[0];
      }
      
      if(userData === undefined){
        userData = {};
      }

      res.status(200).json(userData)
    });


// Query String

  // Query Strings are optional and are not part of the URL
  // So if we enter the url without the query string it will still register in the server
  // Query Strings can be accessed using req.query object
  // query strings are generally in form of Key=Value pair connected with & after ? symbol
  // E.g. : /leaderboard/users?sort=desc&limit=3
    
    // Here URL = /leaderboard/users
    // Query String = ?sort=desc&limit=3
    // req.query = {sort : 'desc' , limit : '3'}

  // With Query String we can pass additional information to the backend in the form of Key,Value Pair


    app.get("/leaderboard/users", (req, res) => {
      const { sort, limit } = req.query;

      console.log(req.query)

      let message = [...leaderboardData];

      if (sort) {
        if (sort === "asec") {
          message = message.sort((a, b) => a.time - b.time);
        } else if (sort === "desc") {
          message = message.sort((a, b) => b.time - a.time);
        }
      }

      if (limit) {
        message = message.slice(0, limit);
      }

      res.status(200).json(message);
    });




app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

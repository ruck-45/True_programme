// Router And Control

    // Router : 
        // We can use express.Router to route specific URL routes 
        // It helps in maintaining a clean app.js configuration, by separating all routes to their respective files

    // Control : 
        // We can use control to furthur clean up the code
        // controls contain all function/logic for each route and for each method inside that route
        // We jsut get the logic from control and then manage the methods in routes



const userRouter = require('./routes/usersRoutes'); // we import the router set up for users, it will be different for different urls

const express = require('express');
const app = express();

const port = 5000;

app.use(express.json());

// Routing
app.use('/api/users',userRouter); // with all URLs starting with '/api/users' are handled by userRouter


app.listen(port,()=>console.log(`Server is listening on port ${port}...`));
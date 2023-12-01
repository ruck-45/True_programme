// http Module

    // Most important module
    // It will allow us to set up ower own web server
    // ExpressJs is a wrapper around this Module to set up web servers and create APIs

    // It creates a server, and makes sure that it listens for requests such that it can respond to them appropriately


    const http  = require('http');

    const server = http.createServer((req,res) => { // req : request object, res : response object
        if (req.url === '/'){ // req.url returns current path
            res.end("Welcome to Home Page");  // Note : res.end() != return;
        }
        else if (req.url === '/about'){
            res.end("Welcome to About Page");
        }
        else if (req.url === '/services'){
            res.write("Welcome to Service Page");
            res.end();
        }
        else if (req.url === '/payment'){
            res.write("Welcome to Payment Page");
            res.end();
        }
        else{
            res.end(`<h1> Oops! 404 Error </h1>
            <p> Page Not found </p>
            <a href = '/'> go to Home ... </a>`);
        }
    })

    server.listen(5000,()=>{ // async function which never terminates and (like setInterval() and looks for any requests to its domain)
        console.log("Server Listening in 5000 port");
        console.log("Visit Server at : http://localhost:6050/");
    })
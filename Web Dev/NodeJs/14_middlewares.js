// MiddleWare
    // Middleware lie between the request and response cycle
    // request => middleware => response

    // middleware are used to execute extra functionalities before request is actually processed


        const express = require('express');

        const app = express();
        const port = 5000;
        
        // Logs important server data
        const logger = (req,res,next)=>{
          const today = new Date();
          console.log(req.method, req.url, today);
          // must be included in all middleware to pass the request to server to respond
          // next() can be omitted if we are directly responding from the middleware itself  
          next();
        }

        const authorize = (req,res,next)=>{
            console.log("authorized")
            next()
        }

        const message = (req,res,next)=>{
            console.log("Message sent")
            next()
        }

        const welcome = (req,res,next)=>{
            console.log("Welcone Back")
            next()
        }

        const math = (req,res,next)=>{
            console.log(2+3)
            next()
        }

        const bye = (req,res,next)=>{
            console.log("Visit Again")
            next()
        }
        
        app.use(logger); // app.use() will apply the middleware for all the methods that appear below it
                        // remember , order matters

        app.use('/api',authorize); // will apply middleware to all the methods that accept url starting with "/api" below it

        app.get('/', welcome, (req,res)=>{ // way to include middleware to individual methods
            const message = "<h1>Home Page</h1>";
            res.status(200).send(message);
        });

        app.get('/about', [math, bye] ,(req,res)=>{ // way to include more than one middeware to individual methods
          const message = "<h1>About Page</h1>";
          res.status(200).send(message);
        });

        app.use(message); // will only apply to methods that are below it

        app.get('/api/users',(req,res)=>{
            const message = [
              { name: "Ron", age: 12 },
              { name: "Ben", age: 13 },
              { name: "Tom", age: 10 },
              { name: "John", age: 15 },
            ];
            res.status(200).json(message);
        });

        app.get('/api/hobbies',(req,res)=>{
            const message = [
              { name: "Gardening", popularity: 1500 },
              { name: "Painting", popularity: 1289 },
              { name: "Golf", popularity: 3251 },
              { name: "Chess", popularity: 4756 },
              { name: "Cycling", popularity: 9532 },
            ];
            res.status(200).json(message);
        });
        
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}`)
        })

        // we can also include multiple middleware in app.use : app.use([welcome,bye,math,authorize])

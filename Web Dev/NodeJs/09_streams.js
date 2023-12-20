// Streams

    // When dealing with huge size of data, it is not preferable to send them at a time on the network
    // Because : 
        // If data is lost then we will have to resend the data again on the network (which obviously is huge)
        // If the data is huge then it may not be assignable at a time to the buffer of node js when we assign it to a variable
        // So we use streams to handle data in chunks

        // In node we have 4 types of streams:
            // Writable : to read data sequencially
            // Readable : to write data sequencially
            // Duplex : to read and write data sequencially
            // Transform : data can be modified while reading or writing


            const {createReadStream, readFile, readFileSync} = require('fs');

        // By default readFileStream reads 64kb of data
        // We can change the default buffer using highWaterMark property
        
            // const readStream = createReadStream("./assets/bigFile.txt", { highWaterMark: 100000 });
            // readStream.on('data',(data)=>{
            //     console.log(data)
            // })


            const http = require('http');

            const server = http.createServer((req,res)=>{
                const readStream = createReadStream("./assets/bigFile.txt", { highWaterMark: 100000, encoding: "utf8" });
                readStream.on('open',()=>{ // sends data in chunks
                    readStream.pipe(res);
                })

                readStream.on("error", (err) => {
                  console.log(err);
                }); 

                // res.end(readFileSync('./assets/bigFile.txt','utf8')) // sends data at once
            });

            server.listen(5000,()=>{
                console.log("server is listening on port 5000....")
            });
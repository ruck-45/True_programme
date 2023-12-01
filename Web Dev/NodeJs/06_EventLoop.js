// Event Loop: 

    // Event Loop is a c/c++ program that is resonsible for the execution of asynchronous tasks stacked in the callback queue


// Facts:

    // Javascript is a single threaded, synchronous programming language
    // Meaning it can run only one task at a time and line by line

    // There are two types of processes : Synchronous and Asynchronous
        // Synchronous process has to be executed as soon as theya re encountered
        // Asynchronous process can be offloaded by the system to be executed later ...
                // ... and they don't affect the flow of the program whenever they are executed ...
                // ... as they are indipendent bits of code



// The Problem:

    // A server typically receives hundreds/thousands of requests each instance and has to provide some kind of response
    // some response can be instantaneous and others might involve heavy computation/time taking I/O process

    // If every request and the response had to be synchronous, the last person has to wait for all the other request to finish processing
    // It will be impractical to make someone wait for so much time if they intended to have a very light-weight request
    // irrespective of the request type wait time should be fast/resonable for each user


    // Thats why servers have Asynchronous tasks
    // They carry out the necessery synchronous tasks immediately and offload the time consuming tasks to be carried out later
    // such a way every user has a window to get a response in a resonable time



// Actual Implementation

    // In NodeJs there are 4 components:
        // 1. Memory Heap : stores all variable , functions etc ... (data of the program)
        // 2. Call Stack (LIFO) : Nodejs server executes each task one by one stored in the call stack 
        // 3. Callback queue (FIFO) : All async tasks and their callbacks are queued here
        // 4. Event Loop : program responsible to push tasks from Callback queue --> Call stack without breaking or interrupting anything

        // ______________________________________________________ 
        // |                                                    |
        // |   __________________          __________________   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |    Memory      |          |     Call       |   |
        // |   |    heap        |          |     Stack      |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   |                |          | ______________ |   |
        // |   __________________          __________________   |
        // |                                                    |
        // ______________________________________________________ 
        // 
        //                                             ^
        //                                             | Event Loop
        //                                             |
        //                                  ________________________________________________________
        //                                  |                                                      |
        //                                  |   ______________    ____________     ____________    |
        //                                  |   |            |    |          |     |          |    |
        //                                  |   |            |    |          |     |          |    |
        //                                  |   ______________    ____________     ____________    |
        //                                  |                                                      |
        //                                  |                  Call Back Queue                     |
        //                                  |   ______________    ____________     ____________    |
        //                                  |   |            |    |          |     |          |    |
        //                                  |   |            |    |          |     |          |    |
        //                                  |   ______________    ____________     ____________    |
        //                                  _________________________________________________________
        

        // Loose end Implementation:
            // Every request made by a user is async in nature, so they are registered and pushed back to call back queue
            // One by one they are brought into call stack by Event loop
            // All the synchronous tasks of that perticular request is executed at once and all async tasks are pushed to callback queue
            // And this cycle repeats




// Facts #2 : 

    // Event Loop only pushes async tasks to call stack if the call stack is empty
    // As long as call stack is occupied all async tasks wait in callback queue

    // There is a general priority of callbacks that is managed by Event Loop

    // Blocking codes are generally code that take time to execute
    // Its the developer's responsibility to identify blocing codes correctly and run them asyncly



// Async Example:

    console.log("first Task")
    setTimeout(()=>{
        console.log("second Task");
    },0) // Even though the timeout is set to 0 seconds, i.e., it should wait 0s to run this code, it still executes last as per async function behaviour
    
    console.log("third Task")
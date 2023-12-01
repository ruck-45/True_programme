// Sync Approach (Blocking)

    // Js executes tasks line by line
    // If a task takes a really long time for a user, then node will be stuck doing that task for a long time and will not allow others to proceed
    // This is a big issue as it denies service for others and basically blocking the flow


// Async Approach (Non - Blocking)

    // If a user demands a expensive task, node offloads the task with a promise that it will complete the task later
    // It takes a callback function that runs after the task is over 
    // meanwhile it moves on and executes rest of the code

    // this makes application faster and responsive

    // But using callbacks will lead to messy code, so we use await and promises to manage this callback hell
// Module

    // For larger projects it may be possible to have multiple Js scripts
    // But there is always a main Js script called app.js that is attached to the website, that performs all the action
    // If we are using modular approach (breaking down functionalities into multiple Js files), 
        // we have to provide :  type = "module" as an attribute to the main script that is attached to the primary webpage


        <script defer type="module" src="./app.js"></script> // type to notify engine we used modular approach for Js



// export - Keyword

    // We use export keyword to allow the variable, method, class etc.. to be accessable to others (other Js files)

    let name = 'Hamlet';
    let writer = 'Shakespere';
        // name and writer can't be used by other Js files as they are not exported

    export function openBook(book){ 
        console.log(`opening ${book} ...`);
    }

    export function closeBook(book){ 
        console.log(`closing ${book} ...`);
    }
        // openBook & closeBook are accessible to other Js files as they are exported

    
    
    // Shortcut
        // We can also export the items all at once instead of one by one
        // We have to export them at the bottom of the Js file
        
        export {name, writer, openBook, closeBook};




// import - Keyword

    // We can only import objects that are exported 
    // importing Non exported objects will throw error

    import {name, writer, openBook} from './books.js';

    // We can also provide alias to imported objects
    // Sometimes it is used to avoid conflicts when objects of different files have same name

    import {openBook, closeBook, publish} from './books.js';
    import {openVideo, closeVideo, publish as vid_publish} from './video.js'; // publish creates conflict , so we rename it on the spot


    // To import all exported objects of a file at once we can use *
    // But we have to provide an alias using which we can access those objects

    import * as book from './books.js';

    book.openBook(); // This is how we access the individual exported objects




// Default Function

    // Every Js file can have at max one default function if needed
    // The default function is like a representative of Js file
    
    // It doesn't has a name (anonymous function)
    // It is always exported (it is its purpose)
    // Normally we put it at the top of the file

    export default function (){
        console.log("This is the default function of this file");
    }


    // Usages of Default function
        // 1. Provide relevant informayion about the file
        // 2. High level abstraction and encryption: 
                // If we have a file that does bunch of operations internally, but has only a single runner function 
                // to actually initiate the wole file operation, we can make the runner function as the default function
                // then any user will only have to interact with default function to execute the whole file.

                // It improves security as we donot allow it to access any other methods or objects inside the file except
                // the default function


    // Importing default function : 
        // Since we have no name for the default function we have to provide an alias while importing it

        import {default as book, openBook, closeBook} from './books.js';

        book(); // calling the default function




// Aggregrating Modules

    // We can create modules within modules and create a file that binds them together
    // Suppose a file system as follows : 

        // app.js

        // --- 2D (folder)
        // --- --- triangle.js
        // --- --- circle.js
        // --- --- square.js

        // --- 3D (folder)
        // --- --- cube.js
        // --- --- sphere.js



        // If we were to import resp. functions from 2D and 3D to app.js we have to import in following manner :
        
        // -- app.js
            import {tri} from './2D/triangle.js';
            import {cir} from './2D/circle.js';
            import {sq} from './2D/square.js';

            import {cu} from './3D/cube.js';
            import {sp} from './3D/sphere.js';


        // It is very tidious and also repetative

    
    // To solve this problem we aggregrate in folder lavel as well, we introduce a js file 2D.js and 3D.js resp
    // Now the file system is like : 


        // app.js

            // --- 2D (folder) & 2D.js
            // --- --- triangle.js
            // --- --- circle.js
            // --- --- square.js

            // --- 3D (folder) & 3D.js
            // --- --- cube.js
            // --- --- sphere.js

    
    // Now aggregrating the modules

    // -- -- 2D.js
        export {tri} from './2D/triangle.js';
        export {cir} from './2D/circle.js';
        export {sq} from './2D/square.js';

    // -- -- 3D.js
        export {cu} from './3D/cube.js';
        export {sp} from './3D/sphere.js';


    // -- app.js
        import * as flat from './2D.js';
        import * as solid from './3D.js';

        flat.tri();
        solid.cu();
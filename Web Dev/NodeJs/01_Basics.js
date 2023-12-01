// Node.js
    // Created to run Javascript outside of browser (in servers)
    // There are no browser related objects/methods here like (window...), because there is no browser



// Globals

    // There are some useful global variables present in node
    // We can acess them at any level of our project

    // - __dirname : path of current directory
    // - __filename : current file name
    // - require : function to use modules (files)
    // - module : info about current module (file)
    // - process : info about environment where the program is being executed

    // - console : to perform task with the console (like console.log)
    // setInterval : Will run the code inside in loop with delay of given interval time
    // setTimeout : Calls the funcion inside it after the given interval of time


    console.log(__dirname);


// Exporting and Importing Modules

    // In Node.Js there are no import and export statements
    // We use 
        // require() : for import 
        // module.exports : for exports

    // module is a global variable that holds info about current module
    // And it also holds info about the exports in the module in "exports" object of the module
    // All we do is add objects/variables and methods to it

    const a = 10;
    const b = {
        name : "ham",
        age : 12
    }
    const c = [23, 2 , 56];
    const d = ()=>{
        console.log("Helen keller")
    }

    // Syntax  - 1 : We assign all exports at a time

    module.exports = {a,c,d} // adds all to the exports object
    module.exports = d; // if we want to export a singe default onject/method 


    // Syntax - 2 : assign one by one
    module.exports.a = a;
    module.exports.b = b;
    module.exports.c = c;
    
    console.log(module);


    // For importing we can directly import using require() storing the module in a variable
    const module_1 = require("./module_1.js")  // .js is optional (only for js files)

    // Or by destructuring specific methods/variables we want
    const {var1,var2,fun1} = require("./module_1")


// secret require() feature

    // One feature require() has is that if we import any module through require() and the module "calls" any function in itself
    // Then it will execute that function when importing
    
    
    // Eg : 

    // Module 1

        const fun = (a,b)=>{
            return a*b
        }

        console.log(fun(4,5))

        module.exports = fun

    // Module 2

        require('./Module_1') // It will print 20 as 4*5 = 20
                              // It mainly happens because node parses the js file before importing and it runs any function it encounters

    
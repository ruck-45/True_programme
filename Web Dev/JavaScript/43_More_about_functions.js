// Arrow Function

    // It is an alternate and shorter way of writing a function

    // Normal function : 
    function add1(a,b){
        c = a+b;
        console.log(c);
    }


    // Anonymus Function : 
    let add2 = function (a,b){
        c = a+b;
        console.log(c);
    };


    // Arrow Function: 

        // For multiline function : remove "function" keyword and add "=>" after parameters
        let add3 = (a,b) => {
            c = a+b;
            console.log(c);
        };


        
        // For singleline function : remove the '{}' after parametres too..
        let add4 = (a,b) => console.log(a+b);

        

        // For single-line function with 'return' -- remove return
        let add5 = (a,b) => a+b;  
                    // let add = (a,b) => return a+b; will give error


        // For function with one parameter -- No need to give '()' around parameter : 
        let square = a => a**2;

        // Function with no parameter
        let Hi = () => console.log('Hi...');




    

// Callback Function

    // If a function is passed as a an argument to another function, we call it a callback function



    let addition = (a,b) => a+b;
    let multiply = (a,b) => a*b;
    let divide = (a,b) => a/b;

    function print(num1,op,num2,callback){ // here callback is a parameter that takes function as input
        console.log(`${num1} ${op} ${num2} = ${callback(num1,num2)}`);
    }

    print(2, '+', 3, addition); // we are passing a function as an argument gere
    print(2, '*', 3, multiply);
    print(2, '/', 3, divide);

    print(2, '%', 3, (a,b) => a%b); // we can also directly pass arrow/anonymous function too ...





// Map Function

    // It takes each element in an array, applies a specific task on them and returns them
    // used to apply same operation on each element of an array and store them in another array


    // Normal Method
    let arr1 = [1,2,3,4,5,6]
    let arr2 = []

    for(let i of arr1){ // squaring each element and saving to a different array
        arr2.push(i**2)
    }


    // map method
    let arr3 = arr1.map(function(i){ // anonymous function implementation
        return i**2;
    });

    let arr4 = arr1.map( i => i**2); // Arrow function implementation
    



// Filter Function

    // It takes each element in an array, applies a condition on them and if condition holds true, then it returns the element
    // used to filter out elements satisfying a condition


    // Normal method
    let arr5 = [54,35,21,8,61,7,3,56,65]
    let arr6 = []

    for(let i of arr5){
        if(i>=50){
            arr6.push(i);
        }
    }


    // Filter method
    let arr7 = arr5.filter(function(i){  // anonymous function implementation
        return i>=50;
    });

    let arr8 = arr5.filter( i => i>=50 );  // Arrow function implementation

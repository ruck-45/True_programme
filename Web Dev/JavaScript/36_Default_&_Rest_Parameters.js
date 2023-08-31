// Default parameter

    // We can pass default parameter to a function such that if no value is given, it assumes the default value specified.

    function fun1(msg){
        console.log(msg);
    }

    fun1(); // undefined


    function fun2(msg = 'hello'){
        console.log(msg);
    }

    fun2(); // hello


// REST Parameter

    // - REST parameter work like args in python. It allows us to take as many inputs for a function by storing them in an array.
    // - The parameter name is followed by 3 dots : ...args


    function abc(...args){ // REST parameter takes all inputs and stores them in form of an array
        console.log(args);
    }

    abc(); // []
    abc(1,2); // [1,2]
    abc(1,2,3,4); // [1,2,3,4]
    abc(1,2,3,4,5,6); // [1,2,3,4,5,6]


    // - The same effect can be achieved using arguments property of a function , which by default stores all passed arguments as an array.
    // - The main differenc is, In case of REST parameters we have a choice to use both normal and REST parameter at the same time.
        // But in case of arguments we have no choice as all of the parameters will be in arguments by default.


    // arguments property

    function abc(){
        console.log(arguments); // by default stores all passed value
    }

    abc(); // []
    abc(1,2); // [1,2]
    abc(1,2,3,4); // [1,2,3,4]
    abc(1,2,3,4,5,6); // [1,2,3,4,5,6]


    function abcd(name,age,...marks){ // we have a choice how much to accept the normal way
        console.log('my name is ' + name + ' and i am ' + String(age) + 'years old. And my marks are : ');
        for(let i = 0; i<marks.length; i++){
            console.log(marks[i]);
        }
    }


    abcd('Harsh',18); // my name is Harsh and i am 18years old. And my marks are : 
    abcd('Amit',21,85,65,78); //my name is Amit and i am 21years old. And my marks are : 
                                    // 85
                                    // 65
                                    // 78
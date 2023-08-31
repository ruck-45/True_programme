// ES6 Class Concept

    // ES6 class concept is called to be sugarcoated
    // Beacuse it's implementation looks like other programming languages, but under the hood it implements same ES5 class architecture




// Class & Object

    // Class can be defined by "class" keyword
    // All the attributes and methods are defined inside it
    // Object of the class can be created using "new" keyword
    // A class can access its own properties using "this" keyword


    class Person1{ // "class" keyword to define a class
        fName = 'Chun';
        lName = 'Li';
        age = 21;

        getFullName(){
            return `${this.fName} ${this.lName}`; // "this" kseyword to access properties of the class inside it
        }
    }


    let p1 = new Person1(); // "new" keyword to create an object of the class

    // Even though we write in different notations, ES6 uses same principles as ES5 under the hood (but with improvements)
    // All the methods declared inside the Class, automatically are assigned to its prototype

    // structure : 
            // p1 
                // -- fName : 'Chun'
                // -- lName : 'li'
                // -- age : 21
                // -- [[Prototype]] (Person)
                        // -- getFullName : f 
                        //  -- [[Prototype]] (Primary)
                                // -- methods and attributes of prototype





// Constructor

    // Constructor is defined using "constructor" keyword
    // Constructor function doesn't has a name
    // It is called everytime an object is created for the class
    // It is primarily used to initialize variables and call methods if necessery


    class Person2{
        constructor(first, last, a){
            this.fName = first;
            this.lName = last;
            this.age = a;
        }

        getFullName(){
            return `${this.fName} ${this.lName}`;
        }
    }

    let p2 = new Person2("Henry","Cavill",35);





// Static Keyword

    // a method or attribute declared using "static" keyword is not accessable through the object
    // If we expand the object the attribute/method will not appear in its structure or in any of the prototype attached to it
    // They are only accessible through the class


    class Person3{

        constructor(first, last, a){
            this.fName = first;
            this.lName = last;
            this.age = a;
        }

        static sex = 'M'; // only is accessible through the class

        static sayHi(){  // only is accessible through the class
            console.log("hi ...");
        }

        getFullName(){
            return `${this.fName} ${this.lName}`;
        }
    }

    let p3 = new Person3("Robert","Stills",41);

    console.log(p3.sex); // undefined
    console.log(Person3.sex); // M

    // console.log(p3.sayHi()); // Error, as it is not found
    console.log(Person3.sayHi()); // hi ...

    console.log(p3);




// Access Specifier (private & public)

    // By default all methods and attributes are public in nature
    // Public : It can be accessed both inside and outside the class

    // "#" is used before the name to make methods and attributes private
    // Private : It can only be accessed within the class, outside it is inaccessible

    class Person4{
        #age; // private attributes must be declared first outside the constructor

        constructor(first, last, a){
            this.fName = first;
            this.lName = last;
            this.#age = a;
        }

        #getFullName(){ // private methods and attributes can only be accessible inside the class
            return `${this.fName} ${this.lName}`;
        }

        displyName(){
            return this.#getFullName(); // only accissible inside the class
        }
    }

    let p4 = new Person4("Mike","Frost",23);
    console.log(p4)

    // console.log(p4.#age); //Error
    // console.log(p4.#getFullName()); //Error
    console.log(p4.displyName()); // Mike Frost





// Inheritance ( "extends" keyword )

    // We can inherit other class properties and methods using "extends" keyword
    // All the public properties will be available to the child, not private
    // We can access curent properties with "this" keyword and parent's properties with "super" keyword

    // we can use super() to call parent's  constructor

    // In Js only single-level and multi-level inheritance is allowed
    // Multiple inheritance is not possible
    // a class can only inherit one parent at a time

    

    class Person5{
        #sex;

        constructor(first, last, a, s){
            this.fName = first;
            this.lName = last;
            this.age = a;
            this.#sex = s;
        }

        getFullName(){
            console.log(`${this.fName} ${this.lName}`);
        }

        entry(){
            this.#welcome();
            this.getFullName();
        }

        exit(){
            this.#goodbye();
            this.getFullName();
        }

        #welcome(){
            console.log('Welcome...');
        }

        #goodbye(){
            console.log('Goodbye...');
        }
    }

    class Employee1 extends Person5{
        constructor(first, last, a, s, ID){
            super(first, last, a, s);
            this.id = ID;
        }

        entry(m){ // shares same name with a function of parent
            console.log(`I have entered ${m}`);
        }

        entrance(){ 
            super.entry(); // calls parent's function
            this.entry('75'); // calls current class's function
        }
    }

    let e1 = new Employee1('Tom', 'Hiddlestone', 40, 'M', '#1411SG');

    console.log(e1.entrance());






// Mixin

    // We can use the concept of Mixin to add more functionalities to a class
    // As we know in Js , there is no concept of multople inheritance, so to counter it we can declair properties in an object and add it to class later
    // we can add any number of objects to a class in this manner, there is no limit


    let extra_features = {
        employed : 'Y',
        getAge(){
            return this.age;
        },
        isMale(){
            return this.sex == 'M';
        }
    }

    class Person6{
        constructor(first, last, a, s){
            this.fName = first;
            this.lName = last;
            this.age = a;
            this.sex = s;
        }

        getFullName(){ 
            return `${this.fName} ${this.lName}`;
        }
    }

    Object.assign(Person6.prototype,extra_features); // adding features defined in the object to the class

    let p6 = new Person6('Ben','Parker',56,'M');
    console.log(p6.isMale()); // True

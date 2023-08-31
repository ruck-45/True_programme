//  ES5 Class system

    // The class system in ES5 was present, but it wasn't like other programming languages
    // It was implemented using object datatype and prototype.



// Defining an Object in ES5

    // We can define object in various ways in ES5
    
    // Direct: 
        let person1 = {
            fName : 'Robin',
            lName : 'Hood',
            age : 21,
            getFullName(){
                return `${this.fName} ${this.lName}`;
            }
        };

        let person2 = { // the drawback with this is we have a lot of copy paste code, while the attributes and methods remain same
            fName : 'Huckle',  // This violets Don't repeat Yourself principle
            lName : 'Finn',
            age : 18,
            getFullName(){
                return `${this.fName} ${this.lName}`;
            }
        };

    
    // Indirect

        let person3 = new Object(); // This method also has similar limitations as before

        person3.fName = 'Ron';
        person3.lName = 'Weasly';
        person3.age = 18;
        person3.getFullName = function (){
            return `${this.fName} ${this.lName}`;
        };


    // So we thought of defining  a class in ES5 using constructor function
    // It will hold all common methods and attributes its object have





// Defining a class in ES5

        // We use constructor function for defining a class
        // Constructor function name always starts with capital letters


        function Person(first,last,a){ // This is a constructor function that creates objects of its type and assigns them attributes and methods
            this.fName = first;
            this.lName = last;
            this.age = a;
            this.getFullName = function (){
                return `${this.fName} ${this.lName}`;
            }
        }

        let person4 = new Person('Harry','Potter',16);
        
        person4.school = 'Hogwarts'; // we can also add other attributes individually

        // This also has a limitation.
        // When we create an object using constructor function, all the methods and attributes are initialized and copied over to the object
        // For attributes its okay as each object has different values for attributes
        // But for default attributes and functions, there is repetition as it is copied over to each object
        // This violets Don't repeat Yourself principle


        // For this we use the concept of Prototype






// Prototype

    // There is a method called : .hasOwnProperty() that returns boolean wheather a method/attribute is present in class by the same name or not
    
    person4.hasOwnProperty('school'); // True
    person1.hasOwnProperty('school'); // False


    // But we haven't defined any hasOwnProperty() method in person, how can it have such method by default ?
    // It is because, whenever an object is created, a predefined prototype is connected to it.
    // It has relevant attributes and methods which can be used by users directly

    // It is not limited to object only, any time an array, methods, objects etc ... are created they are attached with their respective prototype.

    // ex : 

    let arr1 = [1,2,3] // comes with an attached property : length
            // And prototype having methods : concat(), join(), keys(), map(), push(), pop(), shift(), slice() etc ...






// Object prototype
    
    // Normal Declaration & Initialization
        
        // When we create an object normally (without constructor function)
        // the primary prototype (system defined object prototype) is directly attached to the object

        let employee1 = {
            fName : 'Robin',
            lName : 'Hood',
            age : 21,
            getFullName(){
                return `${this.fName} ${this.lName}`;
            }
        };

        // structure : 
            // employee1 
                    // -- fName : 'Robin'
                    // -- lName : 'Hood'
                    // -- age : 21
                    // -- getFullName : f
                    // -- [[Prototype]]
                            //  -- methods and attributes of prototype


    
    // Object through constructor function

        // when we create a constructor function it automatically creates a prototype of the same name as the function
        // And it then attaches the primary prototype to it
        // when an object is created using the constructor function the prototype created by the constructor function is then attached to the object


        function Employee(first,last,a){ // this creates a prototye called Employee (primary prototype points to it)
            this.fName = first;
            this.lName = last;
            this.age = a;
            this.getFullName = function (){
                return `${this.fName} ${this.lName}`;
            }
        }

        let employee2 = new Employee('Frank','Miller',25);

        // structure : 
            // employee2 
                    // -- fName : 'Frank'
                    // -- lName : 'Miller'
                    // -- age : 25
                    // -- getFullName : f
                    // -- [[Prototype]] (Employee)
                            //  -- [[Prototype]] (Primary)
                                    // -- methods and attributes of prototype




// Solving Limitation of constructor Function

    // The limitation of constructor function is that all the constant attributes and functions are getting copied unnecessery
    // The solution is that instead of directly declaring the constant attributes and functions inside the function
    // We can instead assign it to the prototype it creates
    // since prototype is just attached and not copied thus we have only one instance of the constant attributes and functions


    function Employee(first,last,a){
        this.fName = first;
        this.lName = last;
        this.age = a;
    }

    Employee.prototype.getFullName = function (){ // we assign directly to the prototype made by Employee
        return `${this.fName} ${this.lName}`;
    };

    Employee.prototype.company = 'HCL';

    let employee3 = new Employee('Denver','Scout',56);


    // structure : 
            // employee3 
                    // -- fName : 'Denver'
                    // -- lName : 'Scout'
                    // -- age : 56
                    // -- [[Prototype]] (Employee)
                            // -- getFullName : f
                            // -- company : 'HCL'
                            //  -- [[Prototype]] (Primary)
                                    // -- methods and attributes of prototype




// Prototype Chaining (Inheritance using Prototype)

    // Suppose we have two classes as follows :

    function Man(first,last,a){
        this.firstName = first;
        this.lName = last;
        this.age = a;
    }

    Man.prototype.getFullName = function (){
        return `${this.fName} ${this.lName}`;
    };


    function Worker(first,last,a,id){
        this.fName = first;
        this.lName = last;
        this.age = a;
        this.ID = id;
    }

    Worker.prototype.company = 'HCL';



    // Let's say we want the getFullName() functionality in Worker class too
    // But we don't want to repeat the code
    // One way of doing it by pointing the "Man" prototype to 'Worker' prototype
        // Before : 
            // Worker <-- Primary
            // Man <-- Primary

        // After : 
            // Worker <-- Man <-- Primary

    // This way all attributes and functions in "Man" prototype will be included in "Worker" prototype

    Worker.prototype.__proto__ = Man.prototype; // chaining prototype of worker to man
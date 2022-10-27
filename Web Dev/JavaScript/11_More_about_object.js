// new keyword

    // We can initialize objects using new keyword

    // Old initialization

        let Person = {
            f_name: 'Ritesh',
            l_name: 'Sharma',
            get_full_name() {
                return this.f_name + ' ' + this.l_name;
            }
        };

    // initialization using new

        let Person = new Object();

        Person.f_name = 'Ritesh';
        Person.l_name = 'Sharma';
        Person.get_full_name = function (){
            return this.f_name + ' ' + this.l_name;
        };



// Getter and Setter

        // Getter is used to modify the instances of variables before fetching it

        Example : 

        let Person = {
            name: 'Ritesh Sharma',
            get_name() {
                return this.name.toUpperCase();
            }
        };

        // if we want to display the name in upper case we can do two things : 
            Person.name.toUpperCase();
            Person.get_name();

        // But all of them involve function calling, can we change it such that it visualizes as instance calling?
        // We can do that by getter

            let Person = {
                name: 'Ritesh Sharma',
                get _name() { // getter
                    return this.name.toUpperCase();
                }
            };

            Person._name; // will provide uppercase name


        // Setter is just opposite, it modifies before setting Object instances

            let Person = {
                name: 'Ritesh Sharma',
                set _name(str) { // setter
                    this.name = str.toUpperCase();
                }
            };

            Person._name = 'Viswajeet Sahoo'; // will set the name in uppercase


// Object Constructor
    
    // Used to initialize variables in Objects

    // Normal Object initialization : 
            
            let Person1 = {
                f_name : 'Henry',
                l_name : 'Rogers',
                age : 25,
                sex : 'male'
            }

            let Person2 = {
                f_name : 'Georgia',
                l_name : 'Rogers',
                age : 45,
                sex : 'female'
            }

            let Person3 = {
                f_name : 'Frank',
                l_name : 'Hardy',
                age : 18,
                sex : 'male'
            }

    // Object initialization using Constructor

        function Person(fName,lName,Age,Sex){
            this.f_name = fName;
            this.l_name = lName;
            this.age = Age;
            this.sex = Sex;
        }

        let Person1 = new Person('Henry','Rogers',25,'M');
        let Person2 = new Person('Georgia','Rogers',45,'F');
        let Person3 = new Person('Frank','Hardy',18,'M');

    // We can add new properties to individual objects just like before

        Person1.nationality = 'American';
        Person2.job = 'Sanitation Engineers';

    // We can't add features like above to the constructor, it will be invlid
    // We have to directly change in function declaration

        Person.nationality = 'Indian'; // : Wrong


// Object Prototype

    // This is used to dynamically add features to Object Constructors
    // Because prototye is said to be Object that other Object have inherited
    // If we add a property to the top parent, all of its children will have the property

    function Person(fName,lName,Age,Sex){
        this.f_name = fName;
        this.l_name = lName;
        this.age = Age;
        this.sex = Sex;
    }

    let Person1 = new Person('Henry','Rogers',25,'M');
    let Person2 = new Person('Georgia','Rogers',45,'F');
    let Person3 = new Person('Frank','Hardy',18,'M');

    Person1.nationality = 'American'; // adds nationality only to Person1 Object

    Person.prototype.nationality = 'Russian'; // adds to all the object created with Person construstor

    
// Nested Object

    // We can store Objects inside Objects
    // it is known as nested objects
    // It is the basic json format used for APIs

    var Employee = {
        id : 15,
        email : 'abc@gmail.com',
        personal_info : { // second level object
            phone : 7894561230,
            address : { // third level object
                city : 'Cuttack',
                state : 'Odisha',
                nation : 'India'
            }
        }
    };


    // accessing nested object properties

    Employee.id; //accessing first level property
    Employee.personal_info.phone; //accessing second level property
    Employee.personal_info.address.state; //accessing third level property

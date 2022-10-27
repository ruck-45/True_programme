// Object 

    // An object in programmig language is an identifier which has : 
        // 1. properties / charecteristics
        // 2. Methods / Functions

// Declarin an object 

    let Person = {
        first_name : 'Henry',  // Properties
        last_name : 'Cloonie',
        age : '56',
        'Favourite Pet' : 'Cat'
    }


// Accessing a property

    Person.first_name
    Person['first_name']

    // If we access a property whch is not present in the Object, it will return 'undefined'

    Person.number // 'undefined'

// Updating a property

    Person.last_name = 'Frey';
    Person.age = 24;

// Adding a new property in Object

    Person.number = 9865479652;
    Person.email = 'abc@gmail.com'

// Deleting existing property

    delete Person.first_name;

// in keyword

    // It is used to check if the property exists for the Object or not
    'Address' in Person // False : as there is no house property

//  for-in loop for accessing each charecteristic of an Object

    for(let key in Person){
        console.log(`${key} -> ${Person[key]}`);
    }

// declaring Methods in Objects

    // We can declare methods in many different ways

    // 1. Normal decalration

        let Charecter = {
            name : 'Joker',
            property : 'DC comics',
            opponent : 'Batman',
            partner : 'Harley Quinn'
        }

        function dialogue(){
            console.log('Why So serious ?');
        }

        Charecter.punchline = dialogue;

    // 2. Declaration using Anonymous function

        let Charecter = {
            name : 'Joker',
            property : 'DC comics',
            opponent : 'Batman',
            partner : 'Harley Quinn'
        }

        Charecter.punchline = function (){
            console.log('Why So serious ?');
        };

    // 3. Directly declaring in the Object declaration using Anonymous function

        let Charecter = {
            name : 'Joker',
            property : 'DC comics',
            opponent : 'Batman',
            partner : 'Harley Quinn',
            punchline : function (){
                console.log('Why So serious ?');
            }
        }

    // 4.  Special method introduced after ES6

        let Charecter = {
            name : 'Joker',
            property : 'DC comics',
            opponent : 'Batman',
            partner : 'Harley Quinn',
            punchline (){
                console.log('Why So serious ?');
            }
        }


// this keyword

        // Used to access the properties of an Object inside the declaration of the same object

        Example : 

        let Student = {
            name : 'Jonnathon',
            class : 'IX',
            cgpa : 9.50,
            description (){
                console.log(`Hi I am ${this.name} from class ${this.class} and i have secured ${this.cgpa} cgpa out of 10.`)
            }
        }

        // We can also alternatively write it by using the oject name as well
        
        let Student = {
            name : 'Jonnathon',
            class : 'IX',
            cgpa : 9.50,
            description (){
                console.log(`Hi I am ${Student.name} from class ${Student.class} and i have secured ${Student.cgpa} cgpa out of 10.`)
            }
        }
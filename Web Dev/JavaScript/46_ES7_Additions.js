// ES7 Additions

    // ES7 added just few minor tweaks to ES6 class system

    // We can now declare attributes within class (outside constructor) without "this" keyword
    // We can use Arrow function within class now


    class Theatre{
        constructor(loc,stars,movie){
            this.location = loc;
            this.rating = stars;
            this.show = movie;
        }

        name = "INOX";
        type = 'IMAX'; // initializing attributes outside class without "this" keyword.

        welcome = () => console.log(`Welcome to ${this.name}, today we are showing ${this.show} in ${this.type}`); // Arrow function
    }


    let movie1 = new Theatre('Hyderabad',5,"Oppenheimer");

    console.log(movie1.welcome());
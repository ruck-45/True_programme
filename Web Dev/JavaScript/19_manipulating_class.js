// We can manipulate class property using various techniques

// .className Property
    let par = document.getElementById('id_01');
    
    console.log(par.className); // par.className : returns whatever writtten class attribute
    par.className = 'red smaller'; // can overwrite the entire class attribute

    par.className += ' yellow_border'; // adds to the class string


// .classList Property
    console.log(par.classList); // par.classList : returns clases individually in a list format

    for(let i of par.classList){ // prints each class item
        console.log(i);
    }

    par.classList.add('margin'); // adds a new class to class attribute
    par.classList.remove('yellow_border'); // removes class
    par.classList.replace('smaller','normal'); // replaces given class with different one

    console.log(par.classList.contains('normal')); // .contains() returns True if the class is present or False if it isnt

    par.classList.toggle('background'); // toggle adds class if its not present and deletes the class if it is present
// We can manipulate HTML elements in many ways (add, delete, replace, append, clone etc..)
// For that we have many different properties and methods


// .innerHTML

    // using this we can access HTML code written inside selected element
    // And we can replace it as well

    console.log(document.getElementById('id_01').innerHTML);
    document.getElementById('id_01').innerHTML = '<div><b><i>Text modified using innerHTML</i></b></div>';


// createElement() and appendChild()

    // applies on parent
    // Appending means adding to the end
    // So it adds the newly created element to the end inside of the selected element


    // Suppose we are going to add another p tag at the end inside of div tag

        let target = document.getElementById('id_02'); // getting the target div in which we need to append

        let new_ele = document.createElement('p'); // creating a new element
        target.appendChild(new_ele); // appended newly created paragraph in the target div


    // Adding text to newly created p tag

        // using the same .appendChild() method
        let text = document.createTextNode('new paragraph added'); // creating a new textnode
        new_ele.appendChild(text); // appending the textnode into the newly formed p tag

        // using object properties
        new_ele.textContent = 'changed text using object property'; // textContent is used to set text messages inside the selected tag
        
        // We can add other properties using Object properties like :

        new_ele.id = 'new_id'; // giving id
        new_ele.className = 'new_class_01 new_class_02'; // giving class names

    // appending a newly created div to body (practice)

        let new_div =  document.createElement('div');
        new_div.textContent = 'Newly appended Div';
        document.body.appendChild(new_div);



// insertBefore()

    // applies on parent
    // it takes two argument, the element to be inserted, and the position of element before which it needs to be inserted

    // inserting a list at the start of ul
        let new_li_01 = document.createElement('li');
        new_li_01.textContent = 'newly created li, inserted before list 1';

        let par = document.getElementById('id_03');
        par.insertBefore(new_li_01,par.firstElementChild);

    // inserting a list before the third last element
        let new_li_02 = document.createElement('li');
        new_li_02.textContent = 'newly created li, inserted before list 5';

        par.insertBefore(new_li_02,par.lastElementChild.previousElementSibling.previousElementSibling);

        document.body.removeChild


// removeChild()

    // applies on parent
    // takes the position of child as argument to remove it

    // Removing Products from ul

        par = document.getElementById('id_04');
        par.removeChild(par.firstElementChild.nextElementSibling.nextElementSibling);


// cloneNode()

    // applies on parent
    // clones as per request

        par = document.getElementById('id_05');
        let par_clone = par.cloneNode(); // clones only parent tag (not the contents)
        let clone_all = par.cloneNode(true); // clones only parent tag as well as the contents

    // console.log(par_clone);
    // console.log(clone_all);


// replaceChild()

    // applies on parent
    // takes argument the newly created element and the position of child needs to be replaced

        par = document.getElementById('id_06');
        
        let replacing_ele = document.createElement('h4');
        replacing_ele.textContent = 'replaced cotnent'
        
        par.replaceChild(replacing_ele,par.firstElementChild.nextElementSibling);


// .insertAdjacentHTML()

    // applies on a parent
    // allows us to insert HTML code in 4 differt places of a parent

    // can pass HTML code just like text and it will parse as HTML code
    // takes two argument, position and HTMl code string


        // Example :
            
        //     ......................<!-- beforebegin -->
        //     <div>
        //         ..................<!-- afterbegin -->
        //         <p>one</p>
        //         <p>two</p>
        //         <p>three</p>
        //         <p>four</p>
        //         ..................<!-- beforeend -->
        //     </div>
        //     ......................<!-- afterend -->

        par = document.getElementById('id_07');
        
        // par.insertAdjacentHTML('beforebegin','<i>inserted using insertAdjecentHTML</i>');
        // par.insertAdjacentHTML('afterbegin','<i>inserted using insertAdjecentHTML</i>');
        // par.insertAdjacentHTML('beforeend','<i>inserted using insertAdjecentHTML</i>');
        par.insertAdjacentHTML('afterend','<i>inserted using insertAdjecentHTML</i>');

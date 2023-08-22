// HTML attributes are special words used inside the opening tag to control the element's behaviour.
// Like id, class, name, type, src, href, style etc....

// we can dynamically mOdify these attributes using Js (add, remove, replace, etc..)


// .getAttribute() : takes the name of attribute and returns the value of that attribute

    let par = document.getElementById('id_01');
    
    console.log(par.getAttribute('id')); // prints the value of id in selected div
    console.log(par.getAttribute('class')); // prints null as it has no class attribute yet

// .setAttribute() : used to set new attributes dynamically, can set any attribute, takes attribute name and value as parameters

    par.setAttribute('name','practice_div');
    par.setAttribute('class', 'class_01 class_02');

    par.setAttribute('id','id_02'); // replacing existing id


// .removeAttribute() : used to remove attributes dynamically, takes name of attribute as parameter

    par.removeAttribute('id');
    par.removeAttribute('name');


// .hasAttribute() : outputs-> true - if it has specified attribute or false if it doesn't, takes attribute name as parameter

    console.log(par.hasAttribute('style'));
    console.log(par.hasAttribute('id'));
    console.log(par.hasAttribute('class'));
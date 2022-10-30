// ** By DOM all objects are properties of 'document' (Root Node)
// So, any change needs to be done, will be done through Document

// We can access whatever writtten inside an HTML tag ( could be text, another tag , or an entire HTML code ) by using property : innerHTML
// And By the help of :innerHTML, we can change the inner contents too (has t be provided in form of string)


// Direct Selections

    // Selecting element by id

        let x = document.getElementById('id_01');
        console.log(x); // will output the whole element and its contents
        console.log(x.innerHTML); // will output its contents

        x.innerHTML = '<b>Modified text</b>'; // we not only changed the contents, we also inserted an HTML code into it

        
        console.log(document.getElementById('ID_01')); // If an id is not present, it will return  : 'null'



    // Selecting elements by class name

        // used to select multiple elements having same class
        // returns an array of elements

        let arr1 = document.getElementsByClassName('class_01');
        console.log(arr1); // returns an array of elements
        console.log(arr1[0].innerHTML);
        console.log(arr1[1].innerHTML);

        for(let i in arr1){
            arr1[i].innerHTML = `Modified Text ${i}`;
        }

        // We can select elements using multiple class names as well
        // like : document.getElementsByClassName('class_01 class_02 class_03');

    // Selecting element by tag name

        // selects all elements of mentioned tag
        let arr2 = document.getElementsByTagName('i');
        for(let i in arr2){
            arr2[i].innerHTML = 'modifed text';
        }


    // Hybrid selection

        // we can select a tag and then perform selection inside it
        // This is known as hybrid selection

        let a = document.getElementById('div_01');  // selected the div with id : div_01
        let brr = a.getElementsByTagName('p');  // selecting all p tags inside the selected div

        for(let i in brr){
            brr[i].innerHTML = 'Modified text'; // changing only those p tags
        }


    // Query Selector

        // This is the most powerful selector , because we can select parts of html as we do in Css
        // Suppose we want the 'p' tags who have class : 'cl'
        
        // we cannot use only class selector as it will also select the div that belongs to this class
        // we also cannot use hybrid selecton techniques as it searches within the selected tags not through

        // Here is where Query selector comes into play

        let c = document.querySelector('p.cl'); // only selects the first occurance it found
        let crr = document.querySelectorAll('p.cl'); // selects all occurances found in the html body

        for(let i in crr){
            crr[i].innerHTML = 'Added text using query selector';
        }


// Indirect Selections

        // We can select elements in HTMl document without directly select them
        // we can select a tag through its child, parent or siblings

        // parent selector

            // selecting the first ul through its child 'li_01'
            let ch_li = document.getElementById('li_01');
            let par_ul = ch_li.parentElement;  // selects the parent ul tag

            console.log(par_ul.innerHTML);

        // child selector

            // selecting the child of second ul having id : ul_01

            let ul = document.getElementById('ul_01');

            ul.firstElementChild; // selects first child element
            ul.lastElementChild; // selects the last child element
            ul.children; // selects all children it has
            
            // console.log(ul.lastElementChild.innerHTML);

        // sibling selector

            // we can select elements in the same level as the seleted element
            // they are known as siblings

            let li = document.getElementById('li_01');

            li.previousElementSibling; // selects the previous li element in ths same level
            li.nextElementSibling; // selects the next li element in ths same level

            // console.log(li.nextElementSibling.innerHTML);
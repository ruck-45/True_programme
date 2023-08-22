// We can modify inline CSS using multiple methods

// .setAttribute() :
    // can set dynamic inline css using .setAttribute() method
    // But it will totally override any existing inline CSS written

    let par = document.getElementById('id_01');
    par.setAttribute('style','height : auto; width : 50px; background: white; border: 5px solid gray;');


// .style property
    // can directly set inline CSS using .style property
    // But it will completely override the inline style present

    par = document.getElementById('id_02');
    par.style = 'height : auto; width : 50px; background: white; border: 5px solid gray;';


// .style.cssText property
    // can directly set inline CSS
    // can choose between either totally overwriting the inline Css or just add new css code

    par = document.getElementById('id_03');
    
    // par.style.cssText = 'font-size: 20px;'; // will completely overwrite the inline CSS code.
    par.style.cssText += 'font-size: 20px;'; // will add it to the end of existing inline CSS code.


// .style.specific_css_property
    // can individually set css property using .style property
    // will activate that style property for the chosen tag

    par = document.getElementById('id_04');
    
    par.style.background = 'green';
    par.style.padding = '20px';



// Get CSS data (applies for all CSS [internal, external, inline])

    // getComputedStyle() : takes in element as attribute and returns all CSS applied to it

    par = document.getElementById('id_04');
    let css_data = getComputedStyle(par); // will include each and every CSS property assigned to this element

    // console.log(css_data);

    // We can also access individual CSS property like : 
    console.log(css_data.background);
    console.log(css_data.color);
    console.log(css_data.textAlign);
    console.log(css_data.fontFamily);
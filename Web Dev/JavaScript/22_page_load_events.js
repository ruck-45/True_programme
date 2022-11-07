// There are two types of page load : 
    // DOMContentLoaded : when only HTML is fully loaded and DOM tree is completed
                        // But css and other resources like (images, svgs, videos etc have not loaded yet)
                        // in this event we can start selection DOM nodes or initiaize the interface

    // load : when browser fully loads alll HTML elements, css and resorces


    window.addEventListener('DOMContentLoaded', function(){ // will be applied on window
        console.log('DOM Tree created');                    // window means whole HTML page
    });

    window.addEventListener('load',function(){  // we can apply this on whole window
        console.log('all files loaded');        // or on individual elements
    });


    let img_1 = document.getElementById('id_01');
    let img_2 = document.getElementById('id_02');
    let img_3 = document.getElementById('id_03');

    img_1.addEventListener('load',function(){ // load event on individual elements
        console.log('image_01 loaded');
    });

    img_2.addEventListener('load',function(){
        console.log('image_02 loaded');
    });

    img_3.addEventListener('load',function(){
        console.log('image_03 loaded');
    });
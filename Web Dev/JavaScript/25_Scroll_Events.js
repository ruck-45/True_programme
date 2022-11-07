// Scroll Events

// scroll : captures any type of scrolling action

    window.addEventListener('scroll',function(){
        console.log('scrolling ...');
    });


// wheel : For detecting direction of scroll

    window.addEventListener('wheel',function(dir){
        if(dir.deltaY > 0){ // deltaY records change in Y axis (vertical/height)
            console.log('scrolling down ....');
        }

        else if(dir.deltaY < 0){
            console.log('scrolling up ...');
        }

        else if(dir.deltaX > 0){ // deltaX records change in X axis (horizontal/width)
            console.log('scrolling right ...');
        }

        else if(dir.deltaX < 0){
            console.log('scrolling left ...');
        }
    });



// to detect scrolling upto certain offset
    // we can detect if the user has crossed certain point by scrolling and take necessery actions

    window.addEventListener('scroll',fun);

    function fun(){
        if(window.pageYOffset > 200){  // measures distance in pixels , same goes for .pageXOffset for horizontal shifts
            document.body.style.background = 'green';
        }
        else{
            document.body.style.background = 'white';
        }
    }
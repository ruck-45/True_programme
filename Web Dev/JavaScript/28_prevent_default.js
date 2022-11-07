// .preventDefault() : prevents the default behaviour of an element
                      // like an anchor tag redirecting to another page
                      // submit button refreshing page, etc..


    let ele = document.getElementById('anchor_01');

    ele.addEventListener('click',function(event){
        console.log('click operation is performed ......');
        event.preventDefault(); // will not allow to redirect
    });
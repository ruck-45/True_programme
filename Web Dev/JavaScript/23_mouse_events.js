// Mouse events


let div = document.getElementById('box');

// click : single left-click
    div.addEventListener('click',function(){
        console.log('left-click registered');
        div.style.background = 'orangered';
        div.style.transform = 'rotate(-90deg)';
    });


// contextmenu : single right-click
    div.addEventListener('contextmenu',function(){
        console.log('right-click registered');
        div.style.background = 'violet';
    });



// dblclick : double left-click
    div.addEventListener('dblclick',function(){
        console.log('doule-click registered');
        div.style.background = 'blue';
        div.style.transform = 'rotate(45deg)';
    });



// mouseover : bringing mouse on top of the element
    div.addEventListener('mouseover',function(){
        console.log('mouseover registered');
    });



// mouseout : bringing mouse out of element region
    div.addEventListener('mouseout',function(){
        console.log('mouseout registered');
    });


// mousedown : will activate as soon as left mouse click is down
    div.addEventListener('mousedown',function(){
        console.log('mouse-down registered');
    });



// mouseup : will activate as soon as left mouse click is up after pressing
    div.addEventListener('mouseup',function(){
        console.log('mouse-up registered');
    });
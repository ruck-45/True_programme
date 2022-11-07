// There are two types of dimentions: 
    // 1. offsetHeight ,  OffsetWidth : includes content-height/width + padding + border
    // 2. clientHeight ,  clientWidth : includes content-height/width + padding


// offsetHeight / offsetWidth : with border

    let ele = document.getElementById('id_01');

    console.log(ele.offsetHeight);
    console.log(ele.offsetWidth);

// clientHeight / clientWidth : without border

    console.log(ele.clientHeight);
    console.log(ele.clientWidth);
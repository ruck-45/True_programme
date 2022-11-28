// selecting all elements for converstion

let converters = document.getElementsByName('converter');
let converters_div = [];
let converters_img = [];

converters.forEach(function(i){
    converters_div.push(i.firstElementChild);
    converters_img.push(i.firstElementChild.nextElementSibling);
});

let converters_div_p = [];
let converters_div_input = []; // collection (array of array)
let converters_div_selectiondiv = []; // collection (array of array)

converters_div.forEach(function(i){
    converters_div_p.push(i.firstElementChild);
    converters_div_input.push(i.getElementsByTagName('input'));
    converters_div_selectiondiv.push(i.getElementsByClassName('selection'));
});

let converters_div_selectiondiv_p = [];
let converters_div_selectiondiv_ul = [];

converters_div_selectiondiv.forEach(function(i){
    for(let j = 0; j<i.length; j++){
        converters_div_selectiondiv_p.push(i[j].firstElementChild);
        converters_div_selectiondiv_ul.push(i[j].firstElementChild.nextElementSibling);
    }
});

let converters_div_selectiondiv_ul_li = [];  // collection (array of array)

converters_div_selectiondiv_ul.forEach(function(i){
    converters_div_selectiondiv_ul_li.push(i.getElementsByTagName('li'));
});




// Unit change mechanism

for(let i = 0;i<converters_div_selectiondiv_p.length;i++){
    converters_div_selectiondiv_p[i].addEventListener('click',function(){
        converters_div_selectiondiv_p[i].style.cssText += "border-radius : 25px 25px 25px 25px";
        converters_div_selectiondiv_p[i].style.width = '100%';
        converters_div_selectiondiv_p[i].style.color = 'transparent';
        converters_div_selectiondiv_p[i].style.transition = '0.2s';
        converters_div_selectiondiv_p[i].classList.remove('p_hover');

        converters_div_selectiondiv_ul[i].style.display = 'block';
    });
}

for(let i = 0;i<converters_div_selectiondiv_ul_li.length;i++){
    for(let j = 0; j<converters_div_selectiondiv_ul_li[i].length; j++){
        converters_div_selectiondiv_ul_li[i][j].addEventListener('mousedown',function(){
            converters_div_selectiondiv_ul_li[i][j].classList.replace('li_hover','li_hover_02');
            converters_div_selectiondiv_ul_li[i][j].style.transition = '0.2s';
        });

        converters_div_selectiondiv_ul_li[i][j].addEventListener('mouseup',function(){
            converters_div_selectiondiv_ul_li[i][j].classList.replace('li_hover_02','li_hover');

            converters_div_selectiondiv_ul[i].style.display = 'none';

            converters_div_selectiondiv_p[i].classList.add('p_hover');
            converters_div_selectiondiv_p[i].style.color = 'black';
            converters_div_selectiondiv_p[i].style.width = 'auto';
            converters_div_selectiondiv_p[i].style.cssText += "border-radius : 25px 25px 25px 0px";
            converters_div_selectiondiv_p[i].innerHTML = converters_div_selectiondiv_ul_li[i][j].innerHTML;

            let x = Math.floor(i/2);
            let y;
            if(i%2 == 0){
                y=1;
            }
            else{
                y=0;
            }
            disp_convrt(x,y);
        });
    }
}



// Conversion 

for(let i = 0; i<converters_div_input.length; i++){
    for(let j = 0; j<converters_div_input[i].length; j++){
        converters_div_input[i][j].addEventListener('input',function(){
            let value = parseFloat(converters_div_input[i][j].value);
            let parent_id = converters[i].id;
            let from;
            let to;
            let change;

            if(j == 0){
                from = converters_div_selectiondiv_p[2*i].innerHTML;
                to = converters_div_selectiondiv_p[2*i+1].innerHTML;
                change = converters_div_input[i][j+1];
            }
            else{
                from = converters_div_selectiondiv_p[2*i+1].innerHTML;
                to = converters_div_selectiondiv_p[2*i].innerHTML;
                change = converters_div_input[i][j-1];
            }

            change.value = convert(value,parent_id,from,to).toFixed(4);
        });
    }
}


// Selection of converter
let radio = document.getElementsByClassName('Radio_btn'); // radio buttons


for(let i=0; i<radio.length; i++){
    radio[i].addEventListener('click',function(){
        converters.forEach(function(i){
            i.style.display = 'none';
        });
        converters[radio[i].value].style.display = 'flex';
    });
}

// Functions

function disp_convrt(i,j){
    let value = parseFloat(converters_div_input[i][j].value);
    let parent_id = converters[i].id;
    let from;
    let to;
    let change;

    if(j == 0){
        from = converters_div_selectiondiv_p[2*i].innerHTML;
        to = converters_div_selectiondiv_p[2*i+1].innerHTML;
        change = converters_div_input[i][j+1];
    }
    else{
        from = converters_div_selectiondiv_p[2*i+1].innerHTML;
        to = converters_div_selectiondiv_p[2*i].innerHTML;
        change = converters_div_input[i][j-1];
    }

    change.value = convert(value,parent_id,from,to).toFixed(4);
}

function convert(value,parent_id,from,to){
    switch(parent_id){
        case 'temperature':
            switch(from){
                case 'Celsius':
                    switch(to){
                        case 'Celsius':
                            return value;
                        case 'Fahrenheit':
                            return value*9/5 + 32;
                        case 'Kelvin':
                            return value+273.15;
                    }
                case 'Fahrenheit':
                    switch(to){
                        case 'Celsius':
                            return (value - 32)*5/9;
                        case 'Fahrenheit':
                            return value;
                        case 'Kelvin':
                            return (value - 32)*5/9 + 273.15;
                    }
                case 'Kelvin':
                    switch(to){
                        case 'Celsius':
                            return value - 273.15;
                        case 'Fahrenheit':
                            return (value - 273.15)*9/5 + 32;
                        case 'Kelvin':
                            return value;
                    }
            }
        

        
        case 'weight':
            switch(from){
                case 'Kg':
                    switch(to){
                        case 'Kg':
                            return value;
                        case 'g':
                            return value*1000;
                        case 'Stone':
                            return value/6.35;
                        case 'lb':
                            return value*2.20462;
                        case 'Ounce':
                            return value*35.274;
                        case 'Tonne':
                            return value/1000;
                    }
                case 'g':
                    switch(to){
                        case 'Kg':
                            return value/1000;
                        case 'g':
                            return value;
                        case 'Stone':
                            return value/6350;
                        case 'lb':
                            return value/453.6;
                        case 'Ounce':
                            return value/28.35;
                        case 'Tonne':
                            return value/1000000;
                    }
                case 'Stone':
                    switch(to){
                        case 'Kg':
                            return value*6.35;
                        case 'g':
                            return value*6350;
                        case 'Stone':
                            return value;
                        case 'lb':
                            return value*14;
                        case 'Ounce':
                            return value*224;
                        case 'Tonne':
                            return value/157.5;
                    }
                case 'lb':
                    switch(to){
                        case 'Kg':
                            return value/2.205;
                        case 'g':
                            return value*453.592;
                        case 'Stone':
                            return value/14;
                        case 'lb':
                            return value;
                        case 'Ounce':
                            return value*16;
                        case 'Tonne':
                            return value/2205;
                    }
                case 'Ounce':
                    switch(to){
                        case 'Kg':
                            return value/35.274;
                        case 'g':
                            return value*28.3495;
                        case 'Stone':
                            return value/224;
                        case 'lb':
                            return value/16;
                        case 'Ounce':
                            return value;
                        case 'Tonne':
                            return value/35270;
                    }
                case 'Tonne':
                    switch(to){
                        case 'Kg':
                            return value/1000;
                        case 'g':
                            return value/1000000;
                        case 'Stone':
                            return value*157.473;
                        case 'lb':
                            return value*2204.62;
                        case 'Ounce':
                            return value*35274;
                        case 'Tonne':
                            return value;
                    }
            }

        case 'distance':
            switch(from){
                case 'Km':
                    switch(to){
                        case 'Km':
                            return value;
                        case 'm':
                            return value*1000;
                        case 'Mile':
                            return value/1.609;
                        case 'Yard':
                            return value*1093.61;
                        case 'Foot':
                            return value*3280.84;
                        case 'Inch':
                            return value*39370.1;
                    }
                case 'm':
                    switch(to){
                        case 'Km':
                            return value/1000;
                        case 'm':
                            return value;
                        case 'Mile':
                            return value/1609;
                        case 'Yard':
                            return value*1.09361;
                        case 'Foot':
                            return value*3.28083;
                        case 'Inch':
                            return value*39.36996;
                    }
                case 'Mile':
                    switch(to){
                        case 'Km':
                            return value*1.609;
                        case 'm':
                            return value*1609;
                        case 'Mile':
                            return value;
                        case 'Yard':
                            return value*1760;
                        case 'Foot':
                            return value*5280;
                        case 'Inch':
                            return value*63360;
                    }
                case 'Yard':
                    switch(to){
                        case 'Km':
                            return value/1094;
                        case 'm':
                            return value/1.094;
                        case 'Mile':
                            return value/1760;
                        case 'Yard':
                            return value;
                        case 'Foot':
                            return value*3;
                        case 'Inch':
                            return value*36;
                    }
                case 'Foot':
                    switch(to){
                        case 'Km':
                            return value/3281;
                        case 'm':
                            return value/3.281;
                        case 'Mile':
                            return value/5280;
                        case 'Yard':
                            return value/3;
                        case 'Foot':
                            return value;
                        case 'Inch':
                            return value*12;
                    }
                case 'Inch':
                    switch(to){
                        case 'Km':
                            return value/39370;
                        case 'm':
                            return value/39.37;
                        case 'Mile':
                            return value/63360;
                        case 'Yard':
                            return value/36;
                        case 'Foot':
                            return value/12;
                        case 'Inch':
                            return value;
                    }
            }
    }
}
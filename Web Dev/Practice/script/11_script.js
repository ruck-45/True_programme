// Root

var root = document.querySelector(':root');


// Nav Bar buttons

let NavBtns = document.querySelectorAll('Nav a');

NavBtns.forEach( function (btn) {
    btn.addEventListener('mousedown',function(){
        this.style.background = 'rgba(0,0,0,0.2)';
        this.style.border = '3px solid black';
        this.style.color = 'black';
        this.style.fontWeight = 'Bold';
    });
    
    btn.addEventListener('mouseup',function(){
        this.style.background = 'rgba(0,0,0,0.1)';
        this.style.border = '3px solid #2C3539';
        this.style.color = '#2C3539';
    });
});



// Upload File

let upload = document.querySelector('#OgPreview label');

upload.addEventListener('mousedown',function(){
    this.style.transform = 'scale(120%)';
});

upload.addEventListener('mouseup',function(){
    this.style.transform = 'scale(125%)';
});

upload_btn = upload.firstElementChild

upload_btn.addEventListener('change',function(){
    const img = this.files[0];
    const bgUrl = URL.createObjectURL(img);
    root.style.setProperty('--Image',`url(${bgUrl})`);
});


// Filter application

range_inputs = document.querySelectorAll('input[type="range"]');
preview = document.getElementById('preview');
previewBackground = document.getElementById('previewBackground');


range_inputs.forEach(function(slider){
    slider.addEventListener('input',function(){
        switch(this.name){
            case "Blur":
                preview.style.setProperty('--Blur',`${this.value/100}px`);
                break;
            case "Brigntness":
                preview.style.setProperty('--Brigntness',`${this.value/5}%`);
                break;
            case "Contrast":
                preview.style.setProperty('--Contrast',`${this.value/5}%`);
                break;
            case "Grayscale":
                preview.style.setProperty('--Grayscale',`${this.value/10}%`);
                break;
            case "Hue":
                preview.style.setProperty('--Hue',`${this.value/10}deg`);
                break;
            case "Invert":
                preview.style.setProperty('--Invert',`${this.value/10}%`);
                break;
            case "Opacity":
                preview.style.setProperty('--Opacity',`${this.value/10}%`);
                previewBackground.style.setProperty('--Opacity',`${this.value/10}%`)
                break;
            case "Saturate":
                preview.style.setProperty('--Saturate',`${this.value/5}%`);
                break;
            case "Sepia":
                preview.style.setProperty('--Sepia',`${this.value/10}%`);
                break;
            default:
                break;
        }
    });
});
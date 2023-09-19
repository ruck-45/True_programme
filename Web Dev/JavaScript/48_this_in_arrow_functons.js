// this keyword

    // this keyword behaves differently inside different function declarations

    // Example : 

    class P{
        image = document.getElementById("selectedImage");
        imageBackground = "blue";

        constructor(){
            // Senario 1 : using Anonymous/Regular Function
            this.image.addEventListener('click',function(){
                this.style.backgroundColor = 'blue';  // here this will indicate the image we have attached our eventlistner
                                                      // Inside Anonymous function, the object "this" points to is the element on which eventListner is attached
                let color = this.imageBackground      // If we try to access the attributes of the class like :- imageBackground, it will give us error as it can't find it
            });


            // Senario 2 : using Arrow Function
            this.image.addEventListener('click',()=>{
                this.image.style.backgroundColor = this.imageBackground;  // In Arrow function defination, "this" keyword accesses the attributes of the class
                                                    // But not the element on which eventListner is attached
                                                    // Here this.image and this.imageBackground are all attributes of class P
            });
        }

    }
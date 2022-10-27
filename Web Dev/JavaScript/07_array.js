// Array

// Declaring / initializing array :
    
    let arr = new Array();  // :  blank array declaration
    
    let arr = new Array(1,2,3,4,5,6); // : normal initialization
    let arr = [1,2,3,4,5,6];  // : normal initialization

    let arr = [1,2,3,'hen', 5.12 , 'frog']; // : can contain multiple datatypes


// Indexing : 

    // starts from 0

// Updating : 

    arr[5] = 'this';
    arr[0][5] = '5';



// Operations on Array

    // arr.length : length of arr
    
    // arr.push() : append to last
    // arr.unshift(): append to start

    // arr.pop() : delete last element
    // arr.shift() : delete first element

    // arr.splice(start_index, number of elements to be removed) : deletes element(s) from middle
    
    // arr.indexOf(element, start_point) : gives first occurance of element after start_point

    // Array.isArray(arr) : T/F if the arr is of array data type or not

    // text.split('char') : exactly as .split() of python, splits string at given charecter and creates an array
    // arr.join('char') : joins the arrayy elements using the char provided and forms a string
    
    // arr.concat(arr2,arr3,arr4) : concats array

    


// Empty an array

    arr = [];
    arr.length = 0; //: works same as above statement


// +

    // adding arrays using + will cnvert the whole result into string


// traversing array

    // Normal traversal : using loop

        arr = [1,2,3,4,5,6];
        for(i = 0; i < arr.length;i++){
            console.log(arr[i]);
        }

    // Traversal using forEach : forEach iterates through the array and passes the element to the function provided to it
    // forEach(function)

        arr = ['mango','banana','papaya','guava'];
        
        arr.forEach(print_func);

        function print_func(element){
            console.log(element);
        }
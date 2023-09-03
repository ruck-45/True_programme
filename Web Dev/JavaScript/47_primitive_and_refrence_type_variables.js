// Primitive Type Datatypes

    // Number
    // Boolean
    // String
    // null
    // undefined


    // Above datatypes are premitive type means assigning a variable to another copies them directly without refrencing them
    // So we can treat them as separate variables


// Refrence Type Datatypes 

    // Object
    // Functions
    // Arrays
    // Dates

    // Above datatypes are refrence types
    // If we use assignment operators in above datatypes, it doesn't copy the contents, it refrences them
    // Thus changing the original variable changes the ones refrencing to it and vice versa
    
    let arr1 = [1,2,3,4]
    let arr2 = arr1

    arr1[1] += 10 // changed arr2 as well
    arr2[3] *= 5 // cahnged arr1 as well


    // Thus we use mainly spread operator to copy the contents rather than refrencing them
    let arr3 = [...arr1] // will copy the contents and won't change if arr1 changes
                    // same is valid for objects like : obj2 = {...obj1}
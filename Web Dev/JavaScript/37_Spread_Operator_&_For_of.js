// Spread Operator

    // We can sprade an array using spread operator

    let arr1 = [1,2,3];
    let arr2 = [4,5,6];

    let arr3 = [...arr1,...arr2]; //  [ 1, 2, 3, 4, 5, 6 ]
    let arr4 = [1,2,...arr1,4,5]; // [1,2,1,2,3,4,5]
    let arr5 = [8,9,10,...arr2]; // [8,9,10,4,5,6]

    // We can also use spread operators in objects as well

    let employee1 = {
        fname : 'Henry',
        age : 56,
        prof : 'Actor',
        films : ['Man Of Still', 'BVS', 'MI:Fallout', 'Josstice League']
    }

    let employee2 = {
        lname : 'Cavill',
        recent : 'Witcher',
        ...employee1 // spreads (copies) employee1 data into employee to
    }

// For of Loop

    // We can access each element if an iterable (array, string) using For ..of.. 

    let a = [1,2,3,4,5,6];
    for(let ele of a){
        console.log(ele);  // --> 1,2,3,4,5,6
    }


    let s = 'Timothy'
    for(let ch of s){
        console.log(ch); // --> T,i,m,o,t,h,y
    }


// For in loop

    // For ..in .. provides us with indices of the iterable
    // For arrays and string : its the index
    // For objects : its the keys


    let b = [11,12,23,54];
    for(let ind in b){
        console.log(ind);  // --> 0,1,2,3
        console.log(b[ind]); // --> 11,12,23,54
    }

    let t = 'Zoro';
    for(let ch in t){
        console.log(ch); // --> 0,1,2,3
        console.log(t[ch]); // --> Z,o,r,o
    }


    let q = {"a": 12, "b": 78, "c": 85};
    for(let key in q){
        console.log(key); // --> a,b,c
        console.log(q[key]); // --> 12,78,85
    }
// JSON

    // JSON stands for : JavaScript Object Notation
    // Json is primarily used in web-applications & APIs to send and receive data
    // Also Json is sued to store config files in projects

    // JSON is not language specific, i.e, it is supported by all major programming language


    // Syntax
        // JSON is jsut like a Js Object with some modified rules
        // Json stores data in key-value pairs
        // keys in JSOn can only be strings
        // strings in JSON are always represented using : "". '' is not allowed
        // comma is not present after the last element



    // Importing a JSON file:
    import json_data from "./45_data.json" assert {type: 'json'}; // already parsed


    // parsing a JSON string :
    let data = `{
        "name" : "Raily",
        "age" : 21,
        "sex" : "M",
        "is_working" : true,
        "position" : "SDE",
        "skills" : ["c++","Python","Java","Front End","DBMS"],
        "address" : {
            "country" : "India",
            "state" : "Odisha",
            "pin": 124657
        }
    }`;

    let parsed_data = JSON.parse(data);


    // converting an object to JSON string

    let object_data  = {
        fName : 'Tom',
        lName : 'Richie',
        age : 35,
        hobby : ['painting', 'rock collection', 'music', 'reading']
    }

    let json_string = JSON.stringify(object_data);
// SPDX-License-Identifier: GPL-3.0 

pragma solidity >= 0.5.0 <0.9.0;

contract Identity_03
{
    uint public user_id = 0; // state variable
    string public user_name = "Unknown";

    // string memory public user_name; :- Invalid declaration
    
    // variables declared in contract level always get stored in stack
    // memory keyword forces the variable to be stored in memory which invokes an error
    // memory keyword cannot be used in contract level

    function show_phone() pure public returns(string memory)  // "pure" keyword means the function doesnt interact with state variables at all (not even reading or writing) 
    {
        // Local variables are declared inside functions
        // They cannot be accessed outside the scope of current function
        // Instead of contract storage they are stored in stack (Temporarily)
        // Thats why tehy donot cost gas

        // string phone = "1256324785"; :- Invalid declaration

        // Certain type of datatypes in solidity are by default set to be stored in contract Storage
        // Datatypes like : string, array, structure, etc
        // So declaring them inside function will result in compiler error
        // So we need to specify "memory" keyword to instruct compiler to store it in stack

        string memory phone = "1256324785"; // local variable
        uint age = 15;
        return phone;
    }

}
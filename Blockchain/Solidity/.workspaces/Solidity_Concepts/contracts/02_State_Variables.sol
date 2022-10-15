// SPDX-License-Identifier: GPL-3.0 

pragma solidity >= 0.5.0 <0.9.0;

contract Identity_02
{
    // State Variables are declared in contract level
    // State variables are stored permanently in our blockchain (contract storage) , so they use gas everytime they are interacted with (changed/stored)
    // So more the number of State variables , more is the gas spent per contract
    
    // There is no Null or None Concept in solidity
    // So every variable is declared is initialized by some default value (like 0) 

    string public Name; // public keyword lets us access varable without writing a get function ourselves (creates a get function autometically)
    uint public age = 18; // variables can be initialized as soon as they are declared

    // Name = "Ruckdent";  - This kind of initialization is invalid in solidity

    string public phone;
    string password;

    constructor()   // Variables can also be initialized using constructor
    {
        phone = "0000000000";
        password = "Password";
    }

    function set_Name() public  // Variables can also be initialized using a set function
    {
        Name = "Ruckdent";
    }

}
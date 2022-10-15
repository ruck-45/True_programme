// SPDX-License-Identifier: GPL-3.0 

pragma solidity >= 0.5.0 <0.9.0;

contract Indentity_04
{
    string Name ;
    uint public age; // If we use public keyword in variables instead, it autometically creates a getter function for it

    // Functions are defined using "function" keyword
    // Arguments are written within parenthesis
    // Default visibility of all variables and functions are set to "private"
    // We can specify the visibility in the function definition
    // if the function returns someting its datatype must be specified using "returns" keyword in the definition

    // The type of the function can also be specified :- pure / view if necessery

    function get_Name() public view returns(string memory) // getter function
    {
        return Name;
    }


    // Setter functions are desined to make chages in the blockchain storage
    // Therefore, when a setter function is called, it creates a tansaction that needs to be mined, and costs gas

    function setter(string memory new_name, uint new_age) public
    {
        Name = new_name;
        age = new_age;
    }
}
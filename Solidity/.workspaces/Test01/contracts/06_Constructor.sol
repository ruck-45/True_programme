// SPDX-License-Identifier: GPL-3.0 

pragma solidity >= 0.5.0 <0.9.0;

contract Indentity_05
{
    string public Name;
    uint public age;

    // Constructor is used to initialize State variables
    // It an also be used to determine the Owner of the smart contract from the begining
    // We can create only one constructr and it is optional
    // If a constructor is not defined, a default constructor is created by the compiler

    constructor(string memory u_name,uint _age) // Constructor with argument
    {
        Name = u_name;
        age = _age;
    }

}
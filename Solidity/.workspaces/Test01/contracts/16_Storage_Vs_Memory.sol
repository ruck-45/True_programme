// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

contract Storage_Vs_Memory
{
    // memory keyword is used to declare variables in the volatile memory space (RAM)
    
    // state variables are by default declared in storage (storage of blockchain)
    // Storage variables use gas, whlile memory dont
    
    // Certain datatypes like string, array , structure are by default set to storage
    // We need to use memory keyword to declare them in RAM
    // mapping is always stored in storage and consumes gas

    // inside function we cannot keep a variable type blank
    // memory keyword lets compiler know to declare the variable in RAM
    // storage variable lets compalier to decalre the variable in strage


    string[] public arr = ["A","B","C","D"];

    function setter_memory(string memory new_c) public view
    {
        string[] memory c; // created in memory
        c = arr; // stores a copy f array
        c[0] = new_c; // original array doesn't get changed
    }

    function setter_storage(string memory new_c) public
    {
        string[] storage c; // created in storage
        c = arr; // acts as a pointer to arra
        c[0] = new_c; // original array agets changed
    }
}   
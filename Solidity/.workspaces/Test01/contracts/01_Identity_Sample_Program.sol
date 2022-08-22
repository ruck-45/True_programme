// SPDX-License-Identifier: GPL-3.0  // License

pragma solidity >= 0.5.0 < 0.9.0;   // Compiler version

contract Identity       // Contract (like a class)
{
    string Username;    // Variables
    uint age;

    constructor()       // Constructor
    {
        Username = "Ruckdent";
        age = 22;
    }

    function get_name() view public returns(string memory)  // Function (view only)
    {
        return Username;
    }

    function get_age() view public returns(uint)
    {
        return age;
    }

    function incr_age() public      // Function (modifies data)
    {
        age = age +1;
    }

}
// SPDX-License-Identifier: GPL-3.0 

pragma solidity >= 0.5.0 <0.9.0;

contract Idantity_05
{
    string Name = "Ruckdent";
    uint age = 15;

    // view and pure are used to define such functions who donot change the state variables
    // ciew has the permission to read the state variables
    // But, pure functions are not allowed to interact with state variables at all

    function show_Name() public view returns(string memory)
    {
        return Name;
    }

    function phone_num() public pure returns(string memory)
    {
        string memory phone = "123456789";
        return phone;
    }
}
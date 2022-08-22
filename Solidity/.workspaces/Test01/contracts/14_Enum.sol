// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

contract Enum
{
    // Enum is used to give numerical value to strings
    enum permission {not_allowed,sometimes_allowed,always_allowed}

    // an enum variable
    permission public user = permission.not_allowed;
    
    uint public lottery = 1000;

    function change_user_permission(uint val) public
    {
         if(val == 0)
        {
            user = permission.not_allowed;
        }
        else if(val == 1)
        {
            user = permission.sometimes_allowed;
        }
        else if(val == 2)
        {
            user = permission.always_allowed;
        }
    }

    function get_lottery() public
    {
        if(user == permission.always_allowed)
        {
            lottery = 0;
        }
        else if(user == permission.sometimes_allowed)
        {
            lottery = lottery/2;
        }
    }
}
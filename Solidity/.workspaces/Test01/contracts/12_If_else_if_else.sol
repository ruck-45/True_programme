// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >= 0.5.0 <0.9.0;

contract condition
{
    int public num = 0;

    function change_num(int new_num) public
    {
        num = new_num;
    }

    // Conditional statement in solidity
    function check_with_num(int new_num) public view returns(string memory)
    {
        string memory res = "";
        if(new_num>num)
        {
            res = "Greater";
        }
        else if(new_num<num)
        {
            res = "Smaller";
        }
        else
        {
            res = "Equal";
        }

        return res;
    }
}
// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >= 0.5.0 <0.9.0;

// If we declare structure here (above contract level), other contracts can access the Structure

struct Student
{
    string name;
    uint roll;
}

contract School
{
    Student public s1;

    constructor(string memory _name,uint _roll)
    {
        s1.name = _name;
        s1.roll = _roll;
    }

    function change_s1(string memory _name,uint _roll) public
    {
        Student memory s2 = Student({
            name : _name,
            roll : _roll
        });

        s1 = s2;
    }
}
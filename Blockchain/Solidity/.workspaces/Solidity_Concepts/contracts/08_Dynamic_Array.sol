// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >= 0.5.0 < 0.9.0;

contract dynamic_array
{
    uint[] public arr;

    // Function to push elements to array
    function push_element(uint element) public
    {
        arr.push(element);
    }

    // Function to pop elements from array
    function pop_element() public 
    {
        arr.pop();
    }

    // Function to show array length
    function length() public view returns(uint)
    {
        return arr.length;
    }
}
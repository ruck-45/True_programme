// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

contract dynamic_bytes_array
{
    bytes public b = "abcd";

    // Function to push a into the bytes array
    function push_element() public
    {
        b.push("a");
    }

    // Function to pop elements from the bytes array
    function pop_element() public
    {
        b.pop();
    }

    // Function to find the length of the bytes array
    function length() public view returns(uint)
    {
        return b.length;
    }

    // Function to see individual element of bytes array
    function disp_b(uint pos) public view returns(bytes1)
    {
        return b[pos];
    }
}
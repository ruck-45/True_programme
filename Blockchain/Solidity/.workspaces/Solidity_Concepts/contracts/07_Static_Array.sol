// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

contract static_array
{
    // Static array, indexing starts from 0
    // For static array the size is fixed in the compile time
    uint[4] public arr = [1,8,65,32]; 


    function setter(uint pos,uint val) public
    {
        arr[pos] = val;
    }

    function length() public view returns(uint)
    {
        return arr.length; // provides the length of the array
    }
}
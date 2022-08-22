// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity>= 0.5.0 <0.9.0;

contract Loop
{
    int[10] public arr;

    // Any bit of code cannot be written directly at contract level
    // Cotract only consists of state variables and functions
    // Any piece of code to be written from initializing variables to looping , all should be written inside a function

    // For loop
    function for_loop_1_to_10() public
    {
        for(uint i = 0;i<arr.length;i++)
        {
            arr[i] = int(i)+1;
        }
    }

    // While loop
    function while_loop_10_to_100() public
    {
        uint pos = 0;
        while(pos < arr.length)
        {
            arr[pos] = (int(pos)+1)*10;
            pos ++;
        }
    }

    // do while loop
    function do_while_loop_negetive() public
    {
        uint pos = 0;
        do
        {
            arr[pos] = -(int(pos)+1);
            pos++;
        } while(pos<arr.length);
    }
}
// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >= 0.5.0 <0.9.0;

contract bytes_array
{
    // 1 byte = 8 bits
    // 1 hexa decimal digit = 4 bits

    // A byte array is a array which stores using hexa decimal form
    // Byte arrays are immutable , i.e, they cannot be changed

    bytes2 public b2 = "ab"; // each charecter is an 8 bit charecter
                             // So two charecters take up 2 bytes 
                             // hex of "a" = 61
                             // hex of "b" = 62
                             // So b2 = 0x6162

    bytes3 public b3 = "a";  // If redundant spaces are left, byte array masks them with 0s
                             // b3 = 0x610000

    // b2[1] = "c"; :- Invalid, byte array are immutable

    // Function to access individul element of a byte array
    // Unlike a normal array , in which we can access each element using the system generated getter function
    // For byte array we need to specially define a function

    function getter_b2(uint pos) public view returns(bytes1)
    {
        return b2[pos];
    }

    function getter_b3(uint pos) public view returns(bytes1)
    {
        return b3[pos];
    }


    // Function to show the length of byte array
    function len_b2() public view returns(uint)
    {
        return b2.length;
    }

    function len_b3() public view returns(uint)
    {
        return b3.length;
    }
}
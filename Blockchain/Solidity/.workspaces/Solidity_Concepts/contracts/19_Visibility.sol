// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

// There are four kinds of Visibility : public, private, internal, external

    // public   : accessed - within, derived, outside, other
    // private  : accessed - within,    x   ,    x   ,   x  
    // internal : accessed - within, derived,    x   ,   x  
    // external : accessed -   x   , derived, outside, other

contract A
{
    function Public() public pure returns(uint)
    {
        return 1;
    }

    function Private() private pure returns(uint)
    {
        return 2;
    }

    function Internal() internal pure returns(uint)
    {
        return 3;
    }

    function External() external pure returns(uint)
    {
        return 4;
    }

    uint a1 = Public();
    uint b1 = Private();
    uint c1 = Internal();
    // uint d = External();  - This will raise error because external cannot be accessed inside the same contract
}

contract B is A // Child Contract, Inheritance
{
    uint a2 = Public();
    uint c2 = Internal();
    // uint d = External();  - This will also raise error as B inherits External and it will not allow to use it in same contract
}

contract C // derived contract
{
    A obj = new A();
    uint a2 = obj.Public();
    uint c3 = obj.External();
}
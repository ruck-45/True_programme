// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

contract Payable
{

    // Simply making a function payble will activate the function of transfering money from deployed account to contract balance
    // we need to specify the transaction amount in value section of remix ide, and choose appropriate unit
    function add_ether_to_contract_wallet() public payable
    {

    }

    // Function to view contract balance
    function show_contract_wallet() public view returns(uint)
    {
        return address(this).balance;
    }

    // Function to make transfer money from contract balance
    // We have to make the transfer address payable
    function send_five_ether_to_account(address account_address) public 
    {
        address payable account = payable(account_address);
        account.transfer(5 ether);
    }
}
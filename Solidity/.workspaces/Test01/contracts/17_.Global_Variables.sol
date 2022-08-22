// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

contract Global_Variables
{
    // There exist Global variables predefined who provide us with important metadata

    function get_metadata() public view returns(uint,address,uint,uint,uint,uint,bytes memory,address)  // ,bytes4,uint,uint,address
    {
        uint chain_id = block.chainid; // current chain id
        address coinbase = block.coinbase; // current block miner’s address
        uint difficulty = block.difficulty;  // current block difficulty
        uint gaslimit = block.gaslimit;  // current block gaslimit
        uint block_number = block.number;  // current block number
        uint timestamp = block.timestamp;  // timestamp block created (unix epoch time)
        bytes memory msg_data = msg.data;  // complete calldata
        address msg_sender = msg.sender;  // address of sender of the message (who deployed the contract)
        // bytes4 msg_sig = msg.sig;  // first four bytes of the calldata (i.e. function identifier)
        // uint msg_value = msg.value;  // number of wei sent with the message
        // uint transaction_gas_price = tx.gasprice; // gas price of the transaction
        // address transaction_origin = tx.origin; //  sender of the transaction (full call chain)

        return (chain_id,coinbase,difficulty,gaslimit,block_number,timestamp,msg_data,msg_sender); // ,msg_sig,msg_value,transaction_gas_price,transaction_origin
    }
}
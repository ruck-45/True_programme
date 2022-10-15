// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.5.0 < 0.9.0;

contract Lottery
{
    address payable public manager; // MAnager's address , payable
    address payable public winner; // Winner's address , payable

    address[] participants; // all lottery participants

    constructor()
    {
        manager = payable(msg.sender);  // Initializing the manager with the address of the deployer of smart contract
    }

    function lottery_pool() public view returns(uint) // function to return current contract balance
    {
        return address(this).balance;
    }

    function Participants() public view returns(uint) // function returning number of participants
    {
        require(payable(msg.sender) == manager); // only manager can view number of participants
        return participants.length;
    }

    // receive is a special type of function
    // It is used because it has a short declaration
    // Normally receive function is used to receive payments from others
    // Because of this function it is kept External
    receive() external payable // function through which participants can enter lottery draw
    {
        // require is a short way of implementing if..else.. statement
        // If require statement satisfies then only it will allow to execute subsequent lines
        // Else it will stop the request
        require(msg.value == 5 ether); // transaction should be minimum 5 ether
        participants.push(msg.sender); //  address pushed to array
    }

    function random_index() internal view returns(uint) // returns a random number
    {
        // abi.encodePacked or abi.encode takes multiple parameters and convert them int a single text message
        // here abi.encode(block.difficulty,block.timestamp,participants.length) : takes 3 dynamic parameters
        // These dynamic charecters create unique strings
        // Then we use a cryptographic hashing function to generate a large random number

        uint large_random = uint(keccak256(abi.encode(block.difficulty,block.timestamp,participants.length)));
        uint index = large_random % participants.length; // remainder gives a number between 0 to length of particpants
        return index;
    }

    function select_winner() public // function to select winner and transfer money
    {
        require(payable(msg.sender) == manager); // Only manager can declare a winner
        require(participants.length>=3); // there should be atleast 3 participants
        
        uint winner_index = random_index(); // choosing the winner randomly
        winner = payable(participants[winner_index]);
        
        uint prize_money = lottery_pool();
        winner.transfer(prize_money*8/10); // transfering 80% money to winner
        manager.transfer(prize_money/10);  // transfering 10% money to manager

        participants = new address[](0); // emptying participants array
    }
}
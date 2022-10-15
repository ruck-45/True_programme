// SPDX-License-Identifier: GPL-3.0 _age

pragma solidity >=0.5.0 <0.9.0;

contract Mapping
{
    // Mapping is a dictionary like data structure
    // The Key cannot be a dynamic array, structure or enum
    // Values can be of any datatype
    // Mapping is always stored in storage , so it always costs gas

    mapping(uint=>string) public students;

    function setter(uint roll_number,string memory name) public
    {
        students[roll_number] = name;
    }

    // mapping with structure values

    struct Company
    {
        string name;
        uint profit_percent;
        string customer_satisfaction;
    }

    mapping(uint=>Company) public Survey;

    function survey_setter(uint comp_id, string memory comp_name, uint comp_profit, string memory comp_feedback) public
    {
        Survey[comp_id] = Company(comp_name,comp_profit,comp_feedback);
    }
}
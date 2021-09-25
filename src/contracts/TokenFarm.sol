// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
    string public name = "Dapp Token Farm";
    DappToken public dappToken;
    DaiToken public daiToken;

    constructor(DappToken _dappToken, DaiToken _daiToken) {
        dappToken = _dappToken;
        daiToken = _daiToken;
    }

    // 1. Stakes Tokens
    function stakeTokens(uint _amount) public {

        // Transfer Mock Dai tokens to this contract for staking
        daiToken.transferFrom(msg.sender, )
    }

    // 2. Unstaking tokens (Withdraw)

    // 3. Issuing Tokens
}

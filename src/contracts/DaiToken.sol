pragma solidity ^0.8.7;

cosntract DappToken {
    string public name = "Dapp Token";
    string public symbol = "DAPP";
    uint256 public totalSupply = "1000000000000000000000000"; // 1 million tokens
    uint8 public decimals = 18;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    )

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    )

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() public {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf([msg.sender] -= _value);
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
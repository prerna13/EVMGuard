const VulnerableVault = `
// SPDX-Licence-Identifier: MIT
pragma solidiy ^0.8.0; 
Contract VulnerableVault{

mapping(address => uint256) public balances;
function deposit() public payable {
    balances[msg.sender] +=msg.value;
}

function withdraw(uint256 amount) public {
    require(balances[msg.sender]>=amount, "Insufficient balance");
    (bool sent,) = msg.sender.call(value: amount, "");
    require(sent, "failed to send the amount");
    balances[msg.sender] -=amount;
}
}
`;

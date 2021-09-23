const DappToken = artifacts.require('DappToken');
const TokenFarm = artifacts.require('TokenFarm');
const DaiToken = artifacts.require('DaiToken');



module.exports = function(deployer, network, accounts){

    //  DEPLOYE SMART CONTRACT ON THE BLOCKCHAIN    //

    // Deploy Mock DAI Token
    await deployer.deploy(DaiToken);
    const daiToken = await DaiToken.deployed();

    // Deploy Dapp Token
    await deployer.deploy(DappToken);
    const dappToken = await DappToken.deployed();
    
    // Deploy TokenFarm
    await deployer.deploy(TokenFarm, dappToken.address, daiToken.address);
    const tokenFarm = await TokenFarm.deployed();

    await dappToken.transfer(tokenFarm.address, '1000000000000000000000000');
    
}
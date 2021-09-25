const TokenFarm = artifacts.require('TokenFarm');

module.exports = async function(callback){

    let tokenFarm = await TokenFarm.deloyed()
    await tokenFarm.issueTokens()

    console.log("Token issued!");

    callback()

}
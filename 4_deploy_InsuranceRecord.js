var InsuranceRecord = artifacts.require("InsuranceRecord");

module.exports = function(deployer) {
  deployer.deploy(InsuranceRecord);
};
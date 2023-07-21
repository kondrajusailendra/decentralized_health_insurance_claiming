var HospitalRecord = artifacts.require("HospitalRecord");

module.exports = function(deployer) {
  deployer.deploy(HospitalRecord);
};
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const SFSToken = await hre.ethers.getContractFactory("SFSToken");
  const sfsToken = await SFSToken.deploy("SatsFinney Studios Private Offering", "SFS");

  await sfsToken.deployed();

  console.log("Token deployed to:", sfsToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

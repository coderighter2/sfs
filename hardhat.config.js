require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId:1337
    },
    goreli: {
      url: "https://goerli.infura.io/v3/92c82bfd4aef49fd91472a9840dfa8d5",
      accounts: [`0x${process.env.ACCOUNT_KEY}`],
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/9a7cd5c1bc304829847b196ba80ea367",
      accounts: [`0x${process.env.ACCOUNT_KEY}`],
    }
  },
  solidity: "0.8.4",
};

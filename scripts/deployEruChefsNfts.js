
const hre = require("hardhat");

async function main() {

  const EruChefsNfts = await hre.ethers.getContractFactory("EruChefsNfts");
  const eruChefsNfts = await EruChefsNfts.deploy();

  await eruChefsNfts.deployed();

  console.log("EruChefsNfts deployed to:", eruChefsNfts.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
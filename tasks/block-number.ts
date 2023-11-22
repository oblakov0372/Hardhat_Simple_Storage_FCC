import { task } from "hardhat/config";

export default task("block-number", "Get current number of block").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block is: ${blockNumber}`);
  }
);

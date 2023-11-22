import { ethers } from "hardhat";
import { expect, assert } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types/";
import { SimpleStorageInterface } from "../typechain-types/SimpleStorage";

describe("SimpleStorage", () => {
  let simpleStorageFactory: SimpleStorage__factory;
  let simpleStorage: SimpleStorage;
  beforeEach(async () => {
    simpleStorageFactory = (await ethers.getContractFactory(
      "SimpleStorage"
    )) as unknown as SimpleStorage__factory;

    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("it should strat with a favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";

    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should update when we call store", async () => {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);

    const updatedValue = await simpleStorage.retrieve();

    assert.equal(updatedValue.toString(), expectedValue);
  });
});

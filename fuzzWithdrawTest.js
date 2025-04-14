const { ethers } = require("hardhat");
describe("fuzzing VulnerableVault", function(){
      let vault;
      beforeEach(async () =>{
          const vault = await ethers.getContractFactory("VulnerableVault");
          vault = await Vault.deploy();
          await vault.deployed();
        });
      it("Fuzz withdraw function with random inputs", async () =>{
          const [user] = await ethers.getSigners();
          for(let i=0; i<10; i++){
              const depositAmount = ethers.utils.parseEther("1.0");
              await vault.connect(user).deposit({ value: depositAmount });
              const withdrawAmount = ethers.BigNumber.from(Math.floor(Math.random() * 2e18));
              try{
                  await vault.connect(user).withdraw(WithdrawAmount);
                  console.log(`Attempt${i + 1}: Withdraw ${ethers.utils.formatEther(withdrawAmount)} ETH`);
              }catch(err){
                  console.log(`Attempt ${i + 1}: Failed to withdraw ${ethers.utils.formatEther(withdrawAmount)} ETH`);
              }
          }
      });
});

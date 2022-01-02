import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
    "0x98e41D413aDE8D8a7B3FE33C4Af1Cc52B5B8C50a",
);

const tokenModule = sdk.getTokenModule(
    "0x301d066D6bcc5B454cDA36916b9da84691265B07"
);

(async () => {
    try{
        await tokenModule.grantRole("minter", voteModule.address);
        console.log(
            "Successfully gave vote module permissions to act on token module"
          );
    }catch(e){
        console.error("failed to grant vote module permissions on token module of setup-vote", e);
        process.exit(1);
    }

    try{
        const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);
        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent60 = ownedAmount.div(100).mul(60);

        await tokenModule.transfer(
            voteModule.address,
            percent60
          );
        console.log("✅ Successfully transferred tokens to vote module");
    }catch(e){
        console.error("failed to transfer tokens to vote module of setup-vote", e);
    }

})();
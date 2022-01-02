import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x9Db81336A17CbAb3f213430b493006B6EDD89090");

(async () => {
    try{
        const bundleDropModule = await app.deployBundleDropModule({
            name: 'MyShowDAO Membership',
            description: 'DAO for show-watchers',
            image:readFileSync("scripts/assets/nftImage.jpg"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        })

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    }catch(err){
        console.log("Error occured: ", err);
        process.exit(1);
    }
})()
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4b35822fBf610Af2aC83362FC703B696760136d2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Anonymous Hitman_new",
        description: "This NFT will give you access to MyShowDAO!",
        image: readFileSync("scripts/assets/nftImage_copy.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
import sdk from './1-initialize-sdk.js';

const appModule = sdk.getAppModule(
    '0x9Db81336A17CbAb3f213430b493006B6EDD89090',
);

(async () =>{
    try{
        const voteModule = await appModule.deployVoteModule({
            name: "MyShowDAOs Proposal",
            votingTokenAddress: "0x301d066D6bcc5B454cDA36916b9da84691265B07",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24*60*60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: '0',
        });
        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    }catch(e){
        console.error("Error inside main function of deployedVote.js");
        process.exit(1);
    }
})();
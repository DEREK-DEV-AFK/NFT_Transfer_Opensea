const ethers = require('ethers');
//import * as Web3 from 'web3';
const Web3 = require('web3');
const opensea = require('opensea-js');
const OpenSeaSDK = require('opensea-js').OpenSeaSDK;
//const OpenSeaPort = open
const HDWalletProvider = require("@truffle/hdwallet-provider");
//import { OpenSeaSDK, Network } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
//const provider = new ethers.providers.InfuraProvider('https://mainnet.infura.io');

const privateKeys = ["8380ff55e0655d9f6fba4d88d010fdb3b7e1b363463f5149474cd98b9b912887"];

const provider = new HDWalletProvider(privateKeys, "https://rinkeby.infura.io/v3/585178b4d49e49c59162eee163ccade8",0,2);

const signer =  provider.getAddress();

// tokens and contracts , keys, chain ids
const goerliInfuraApiKey =  'b2d0629fba3145f88233503504f55c58'
const goerliChainID = "5";
const rinkebyContract = "0xe14d43E520Ab61050A84412d18daa6EFDBE6A226";
const georlitokenId = '0';
const georliContract = "0x2ea573FF826e736c7A93d45B87be9659497F35b4";

const seaport = new opensea.OpenSeaPort(provider, {
    networkName: opensea.Network.Rinkeby
})

async function acceptOffer() {

    const sellerAddress = "0xC9DDd4a9640DE6a774A231F5862c922AC6cb394D";
    const BuyerAddress = "0xBD1331f9E06c2934cc9B9b3E6ad4F011e66869C1";

    let order = await seaport.transfer({
        asset: {tokenId: "1",tokenAddress: '0xe14d43E520Ab61050A84412d18daa6EFDBE6A226'},
        fromAddress: "0xC9DDd4a9640DE6a774A231F5862c922AC6cb394D",
        toAddress: "0xBD1331f9E06c2934cc9B9b3E6ad4F011e66869C1"
    });

    console.log("order: ",order);
    console.log(signer);
}

acceptOffer();
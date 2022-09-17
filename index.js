const opensea = require('opensea-js');

const HDWalletProvider = require("@truffle/hdwallet-provider");
const { data } = require('./details.json');

// This example provider won't let you make transactions, only read-only calls:
//const provider = new ethers.providers.InfuraProvider('https://mainnet.infura.io');

const privateKeys = [data.accounts.acc1.pvtKey];

const provider = new HDWalletProvider(privateKeys, data.api.rinkeby.infura.url,0,2);

const signer =  provider.getAddress();

const rinkebyNftContract = "0xe14d43E520Ab61050A84412d18daa6EFDBE6A226";

const seaport = new opensea.OpenSeaPort(provider, {
    networkName: opensea.Network.Rinkeby
})

async function acceptOffer() {

    const sellerAddress = data.accounts.acc1.address;
    const BuyerAddress = data.accounts.acc2.address;

    let order = await seaport.transfer({
        asset: {tokenId: "1",tokenAddress: rinkebyNftContract},
        fromAddress: sellerAddress,
        toAddress: BuyerAddress
    });

    console.log("order: ",order)
}

acceptOffer();
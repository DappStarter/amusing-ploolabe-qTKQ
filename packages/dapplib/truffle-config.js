require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note script mistake hunt glide flat slice'; 
let testAccounts = [
"0x8fb3550ab9af891c90234081175a1c1149003e830aa0c0e2143f0bfa202d933d",
"0x4cc8ab4384a8e60d66d5c01648dce9ff74b817e02541a55b0073542938a67a83",
"0xc4ef90a1ba691e895a71e38a8205b60653c10a275395df496052887f2ff10117",
"0xadab453da1673adda6e96d90a6897bcbd01dce2d78a7b97890464fb8e332af64",
"0x88801be51747852941421960c991db93213a3b32eafe8bd8c5441d3e57e91722",
"0x8c783480812679238f43240a94b63796ef2ab41e090fa0b854b43a649dbf70e2",
"0xa2039c7faecef235b2413c70727987c7aec13a00658aa231a7f2fe52f778b233",
"0x4b23e0d6221d9e3a6514806dda97eacead8a71014b7f2cd66adca8ba60d1265c",
"0xc4cbd80c2c18f0432134b0fcadb113337d53923db20735ff3a3495add9c319d8",
"0xb7d5731415606f40e01512b2582f0d394c9a273cf4cc02b55268ada6d3026c6f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


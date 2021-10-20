require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture street recipe night mobile gloom kite army gaze'; 
let testAccounts = [
"0x82fe283ddec40154596c64a47a6a8459b86fe47bea45a5aa9e1efec3afd59bab",
"0x2351a72883da53f621b6e2512aab4dd398e25c20d0cef83e06c6b649229a27e3",
"0x921ce63628f318d8136328accfeb130b6f9f1bd03ba8f8893916890f2e51d910",
"0x626de093dd56c0bd5c1168f201656d2d9ec641df8c4799011a9255e9862826e2",
"0x500eb8f095b6028fd012cb41dda5bfa341becc7dc95e709095d905d2e8a07b55",
"0xa356a892daa0f041541b4742fa57e475a2cf31cced39ce0cf10718af4a8abc0d",
"0x1919c675855e25fab96ebe8f1fb5a6628c4800577289532b7118bc692757e32f",
"0x69e5a0b40bf24e9402f5261118f93d2c58e5a79e363b6ed117fb4b30e0238a80",
"0x36335d9eb41b5a1ab54be5fe7709ecf63f121ca80dc8c2641e9efc8def0ba736",
"0xeacbe35023f0c839d10dcfc2fb5a62d357a777e88252f77d8f55d5d806efc822"
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


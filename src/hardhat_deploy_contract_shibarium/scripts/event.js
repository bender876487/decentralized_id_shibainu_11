const hre = require("hardhat");
const ethers = require('ethers');



async function main() {
    
//await hre.run("compile");
    
    
    
// The Contract interface
let abi = [
    "event GreeterEvent(string NewGreeting)",
    "function greet() view returns (string memory)",
    "function setGreeting(string memory _greeting)",
];

// Connect to the network
// let provider = ethers.getDefaultProvider("homestead");
let httpProvider = new ethers.providers.JsonRpcProvider();

//const ALCHEMY_API_KEY = "xJwr1pUBEIS2N1hJqw-gQ6_3jI10rFxo";
let url=``
url = "http://something-else.com:8546";
url=`https://puppynet.shibrpc.com`
url=`https://eth-sepolia.g.alchemy.com/v2/xJwr1pUBEIS2N1hJqw-gQ6_3jI10rFxo`
let customHttpProvider = new ethers.providers.JsonRpcProvider(url);


// The address from the above deployment example
let contractAddress = "0xa54D0A4AFBfeFc07847dbbe2AFE80b97C6932783";

// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
let contract = new ethers.Contract(contractAddress, abi, httpProvider);



// A Signer from a private key
const SEPOLIA_PRIVATE_KEY = "ca46a9eb514f59b9b7e69ac7c7cc9e976395ac9e222faef087fa898dbccb3939";
const PUPPYNET_PRIVATE_KEY = "b4963db0ad1d5920a24492d49f88f3501c5acc8de7c248911fc4eb1fc2a5d009";

let privateKey = SEPOLIA_PRIVATE_KEY ;
let wallet = new ethers.Wallet(privateKey, httpProvider);

// Create a new instance of the Contract with a Signer, which allows
// update methods
let contractWithSigner = contract.connect(wallet);

let tx = await contractWithSigner.setGreeting("MSG 7373");

// The operation is NOT complete yet; we must wait until it is mined
await tx.wait();

// let tx2 = await contractWithSigner.setGreeting("whats up!");

// The operation is NOT complete yet; we must wait until it is mined
await tx.wait();

contract.on("GreeterEvent", (setter, NewGreeting, event)=> {
	console.log("New Greeting is", NewGreeting);
})

}

main();


//run ion h abash shell
//npx hardhat run --network localhost scripts/event.js
//npx hardhat run --network sepolia scripts/event.js



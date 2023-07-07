i. Run these commands

git clone https://github.com/bender876487/decentralized_id_shibainu_11.git

cd decentralized_id_shibainu_11

npm install
npm audi fix

#do not run: npm audi fix --force
#do not force


npm start

open he browser to loalhost:3000




//readme_decentralized_id_shibainu

i. The component App.jsx calls ChoreForm.jsx .

i. ChoreForm.jsx is a webform.

There are the filds:
var puppynet_rpcUrl='https://puppyscan.shib.io/'
var puppynet_chainid=917
var wallet_address='0x071063******************'
var private_key_wallet='b496******************'
var keypair = EthrDID.createKeyPair()


These variables are used to create the objects DidShibainuEtherDidArguments and deploycontract_catchevent_etc_arguments

var DidShibainuEtherDidArguments={puppynet_rpcUrl_new:puppynet_rpcUrl, puppynet_chainid_new:puppynet_chainid, wallet_address_new:wallet_address, private_key_wallet_new:private_key_wallet}

var deploycontract_catchevent_etc_arguments=DidShibainuEtherDidArguments  


i. When the user click the button submit the 2 function are invocate from ChoreForm:

DidShibainuEtherDid(), deploycontract_catchevent_etc();



i. The function DidShibainuEtherDid() generate the DID 

i. The function deploycontract_catchevent_etc() stores the DID in the puppynet_chain
The function deploycontract_catchevent_etc() calls/uses the contract EventEmitter.sol

The contract EventEmitter.sol stores the DID in the puppynet_chain.

i. This instruction in the function deploycontract_catchevent_etc() actually does the job: 
it stores the DID in the puppynet_chain


const tx = await eventEmitter.emitBothEvents(42, DID);


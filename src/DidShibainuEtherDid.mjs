//read the directory document
//link: https://github.com/uport-project/ethr-did/blob/master/docs/guides/index.md

import  {EthrDID } from 'ethr-did' ;
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';



//var DidShibainuEtherDidArguments={puppynet_rpcUrl:puppynet_rpcUrl, puppynet_chainid:puppynet_chainid, wallet_address:wallet_address, private_key_wallet:private_key_wallet}


export default async function DidShibainuEtherDid({puppynet_rpcUrl_new, puppynet_chainid_new, wallet_address_new, private_key_wallet_new, DID}) 
{



//section

//PART1 CREATE DID
//EXAMPLE1
//https://github.com/uport-project/ethr-did/blob/master/docs/guides/index.md

    
//var puppynet_rpcUrl='https://puppyscan.shib.io/'
//var puppynet_chainid=917
//var wallet_address='0x071063F7EfAA6A0F537B43C1b65fA058DA681FFe'
//var private_key_wallet='b4963db0ad1d5920a24492d49f88f3501c5acc8de7c248911fc4eb1fc2a5d009'
    
    
var puppynet_rpcUrl=puppynet_rpcUrl_new
var puppynet_chainid=puppynet_chainid_new
var wallet_address=wallet_address_new
var private_key_wallet=private_key_wallet_new
var keypair = EthrDID.createKeyPair()

var ethrDid = null

console.log('\n\n[MSG4451. DidShibainuEtherDid.mjs. Start.]\n\n');

console.log({puppynet_rpcUrl_new, puppynet_chainid_new, wallet_address_new, private_key_wallet_new}) 
console.log("\n\n") 


try {
    ethrDid = await new EthrDID({ 
    identifier: wallet_address, 
    privateKey: private_key_wallet, 
    chainNameOrId: puppynet_chainid,
    provider:puppynet_rpcUrl,
    keypair:keypair
})

          
} catch (error) {
        console.log('\n\n')
        console.error('[MSG445. DidShibainuEtherDid.mjs. Invocation DidShibainuEtherDid().] '+ error);
        console.log('\n\n')
        console.log('[MSG446. DidShibainuEtherDid.mjs. exit with `return error`.]');
        console.log('\n\n')
        return error;

        //process.exit(1);

}





const ethrDid_string = JSON.stringify(ethrDid)
    
//replace ion with shib etc
const regex = /did[:]ethr/g;
const final = `did:shib`;
const ethrDid_sting_shib = ethrDid_string.replace(regex, final);

/*
    
console.log("Generated DID:", didUri)
console.log("Generated DID Shib:", didUri_shib)

console.log(ethrDid)
*/

console.log('\n\n[MSG4452. DidShibainuEtherDid.mjs. ]\n\n');
console.log("\n\n") 
console.log('keypair: ', keypair) //get keypair

console.log("\n\n") 
console.log('ethrDid_sting_shib: ', ethrDid_sting_shib) //get keypair

console.log("\n\n") 
console.log('ethrDid.address: ', ethrDid.address) //provide its own address (ethrDid.address)





//provide the full DID string (ethrDid.did)
console.log("\n\n") 
const ethrDid_did_string = JSON.stringify(ethrDid.did) 
//replace ethr with shib etc
//const regex = /did[:]ethr/g;
//const final = `did:shib`;
const ethrDid_did_string_shib = ethrDid_did_string.replace(regex, final);
console.log(ethrDid_did_string_shib) 

console.log("\n\n") 
//console.log(await ethrDid.lookupOwner()) //lookup its owner await ethrDid.lookupOwner()

console.log("\n\n") 
//console.log(await  ethrDid.verifyJwt(jwt)) //verify a JWT await ethrDid.verifyJwt(jwt)

console.log("\n\n") 






//------------------------------------------


//section
//EXAMPLE2
//var sepolia_chainNameOrId = 11155111
//var goerli_chainNameOrId = 'goerli'
/*OUTPUT*/ //did:ethr:goerli:0xB9C5714089478a327F09197987f16f9E5d936E8a






//--------------------------------
//PART3 RESOLV DID STRING TO DID DOCUMENT
//const rpcUrl = "https://goerli.infura.io/v3/<get a project ID from infura.io>";
//var puppynet_rpcUrl='https://puppyscan.shib.io/'

//var puppynet_chainid=917
var puppynet_chainname=`puppynet`
//const didResolver = new Resolver(getResolver({ rpcUrl, name: "goerli" }));
const didResolver = new Resolver(getResolver({ rpcUrl:puppynet_rpcUrl, name: "puppynet" }));

console.log('\n\n[MSG4453. DidShibainuEtherDid.mjs. ]\n\n');
console.log("\n\n") 
console.log(didResolver)
console.log("\n\n") 
console.log(JSON.stringify(didResolver))


//get did decoment
console.log('\n\n[MSG4454. DidShibainuEtherDid.mjs. ]\n\n');
const didResolved = await didResolver.resolve(ethrDid.did)
const didDocument = didResolved.didDocument
//(await didResolver.resolve(ethrDid.did)).didDocument
console.log("\n\n") 
console.log(didDocument)
console.log("\n\n") 
console.log(JSON.stringify(didDocument))


return ethrDid

}



//DidShibainuEtherDid()

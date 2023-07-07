import React from 'react';
import { useState } from 'react';
import DidShibainuEtherDid from './DidShibainuEtherDid';
//import deploycontract_catchevent_etc from './hardhat_deploy_contract_shibarium/scripts/deploycontract_catchevent_etc';



/*
example data
var puppynet_rpcUrl='https://puppyscan.shib.io/'
var puppynet_chainid=917
var wallet_address='0x071063******************'
var private_key_wallet='b496******************'
var keypair = EthrDID.createKeyPair()
*/



//function ChoreForm({  }) {
export default function ChoreForm({  }) {
  const [puppynet_rpcUrl, update_puppynet_rpcUrl] = useState(`https://puppyscan.shib.io/`);
  const [puppynet_chainid, update_puppynet_chainid] = useState(917);
  const [wallet_address, update_wallet_address] = useState(`0x071063******************`);
  const [private_key_wallet, update_private_key_wallet] = useState('b496******************');
    
    
    
    
  //HANDLESUBMIT
  const handleSubmit= (e) => {
        
  console.log(puppynet_rpcUrl)
  console.log(puppynet_chainid)
  console.log(wallet_address)
  console.log(private_key_wallet)
    
  
  
    
  var DidShibainuEtherDidArguments={puppynet_rpcUrl_new:puppynet_rpcUrl, puppynet_chainid_new:puppynet_chainid, wallet_address_new:wallet_address, private_key_wallet_new:private_key_wallet}

  
  var DID=null
  var ethrDid_string = null
  var eventEmitter_address= null
  
  //-------------------        
  //GENERATE DID  
  try {
      
      DID =  DidShibainuEtherDid(DidShibainuEtherDidArguments) ;
      ethrDid_string = JSON.stringify(DID)

      console.log('[MSG535a. ChoreForm.mjs.] DID: ', DID);
      console.log('[MSG535b. ChoreForm.mjs.] ethrDid_string: ', ethrDid_string);
          
  } catch (error) {
        console.error('[MSG535. ChoreForm.mjs. Invocation DidShibainuEtherDid().] '+ error);
  }
    

  //-------------------  
  //RECORD DID IN THE puppynet chain
  //deploycontract_catchevent_etc  
  try {
      
      //eventEmitter_address =  deploycontract_catchevent_etc({DID:DID}) 
      
      console.log('[MSG536a. ChoreForm.mjs.] eventEmitter_address: ', eventEmitter_address);
          
  } catch (error) {
        console.error('[MSG536. ChoreForm.mjs. Invocation deploycontract_catchevent_etc().] '+ error);
  }
    
  //-------------------  
      
   e.preventDefault();
  }
    
    
    
    
    
    
    
    
    
    
  
/*
//var puppynet_rpcUrl='https://puppyscan.shib.io/'
//var puppynet_chainid=917
//var wallet_address='0x071063F7EfAA6A0F537B43C1b65fA058DA681FFe'
//var private_key_wallet='b4963db0ad1d5920a24492d49f88f3501c5acc8de7c248911fc4eb1fc2a5d009'
 
*/  
  
  return (
      <form onSubmit={e => { handleSubmit(e) }}>
        <div className="VerticalSpaceWhite"> </div>
        <label>puppynet_rpcUrl, say https://puppyscan.shib.io/:</label>
        <br />
        <input 
          name='puppynet_rpcUrl' 
          type='text'
          value={puppynet_rpcUrl}
          onChange={e => update_puppynet_rpcUrl(e.target.value)}
        />
        <br/>
        <div className="VerticalSpaceWhite"> </div>
        <label>puppynet_chainid, say 917:</label>
        <br />
        <input 
          name='puppynet_chainid' 
          type='number'
          value={puppynet_chainid}
          onChange={e => update_puppynet_chainid(e.target.value)}
        />
        <br/>
        <div className="VerticalSpaceWhite"> </div>
        <label>wallet_address, say 0x071063F7EfFF7A0F537B43C1b65fB898DA681GGe:</label>
        <br />
        <input 
          name='wallet_address' 
          type='text'
          value={wallet_address}
          onChange={e => update_wallet_address(e.target.value)}
        />
        <br/>
        <div className="VerticalSpaceWhite"> </div>
        <label>private_key_wallet, say b4963kk9gf5a9988a24492d49f88f3501c5acc8de7c249988jj4eb1fc2a5d009 :</label>
        <br />
        <input 
          name='private_key_wallet'
          type='text'
          value={private_key_wallet}
          onChange={e => update_private_key_wallet(e.target.value)}
        />
        <br/>
        <div className="VerticalSpace"> </div>
        <label>Generate DID, and Check JS browser console</label>
        <br />
        <input 
          type='submit' 
          value='Submit/Generate DID' 
        />
      </form>
  )
}

//  export default ChoreForm;

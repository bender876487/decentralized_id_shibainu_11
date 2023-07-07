import './App.css';
import ChoreForm from './ChoreForm.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><code>Sidetree Shiba</code></p>
      </header>
      <br/>
      <div className="VerticalSpaceWhite"> </div>
        <p> You must use a real wallet_address and private_key_wallet, for ethereum blockchain.</p>
        <p> You can create them with metamask plugin for chrome.</p>
        <p> Check the JS browser console please.</p>

      <div className="VerticalSpaceWhite"> </div>
        <p>puppynet_rpcUrl=https://puppyscan.shib.io/</p>
        <p>puppynet_chainid=917</p>
     <div className="VerticalSpace"> </div>
      <ChoreForm/>
      <div className="VerticalSpaceWhite"> </div>
    </div>
  );
}

export default App;

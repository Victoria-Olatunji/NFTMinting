import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import Footer from './Footer';


function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="Overlay">
      <div className="App">
      <NavBar accounts = {accounts} setAccounts = {setAccounts} />
      <MainMint accounts = {accounts} setAccounts = {setAccounts} />  
      <Footer /> 
    </div>
    <div className="moving-background"></div>  
    </div> 
  );
}

export default App;

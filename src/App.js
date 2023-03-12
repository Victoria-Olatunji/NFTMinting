import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import Navbar from './NavBar';
import React from 'react';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <NavBar accounts = {accounts} = {setAccounts} />
      <MainMint accounts = {accounts} = {setAccounts} />  
    </div>
  );
}

export default App;

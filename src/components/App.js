import React, { Component } from 'react'
import Navbar from './Navbar'
import Web3 from 'web3'
import './App.css'
import DaiToken from "../abis/DaiToken.json"
import DappToken from "../abis/DappToken.json"
import TokenFarm from "../abis/TokenFarm.json"
import Main from './Main'

class App extends Component {


  render() {

    return (
      <div>
        <Navbar/>
      </div>

    );
  }
}

export default App;

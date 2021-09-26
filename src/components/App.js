import React, { Component } from 'react'
import Navbar from './Navbar'
import Web3 from 'web3'
import './App.css'
import DaiToken from "../abis/DaiToken.json"
import DappToken from "../abis/DappToken.json"
import TokenFarm from "../abis/TokenFarm.json"
import Main from './Main'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: '0x0'
    }
  }

  render() {

    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main"
              className="col-lg-12 ml-auto mr-auto"
              style={{ maxWideth: "600px" }}>
                <div className="content mr-auto ml-auto">
                  <a
                    href="http://www.dappuniversity.com/bootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                  </a>
                </div>

            </main>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

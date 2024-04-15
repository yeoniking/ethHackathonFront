import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import NavBar from './NavBar';

function Mint() {
    return(
        <div className="App">
            <NavBar />
            <Container className="d-flex justify-content-center mt-4">
                <BoxWithControls />
            </Container>
        </div>
    )
}

function BoxWithControls() {
    const [numberOfNFTs, setNumberOfNFTs] = useState(0);
  
    const handleInputChange = (event) => {
      const value = parseInt(event.target.value);
      setNumberOfNFTs(value);
    };
  
    const mintNFTs = () => {
      alert(`Minting ${numberOfNFTs} NFT(s)`);
    };
  
    return (
      <div className="box">
        <h2 className="box-title">NFT mint</h2>
        <div className="box-content">
          <p>Join 0.01ETH</p>
          <div style={{ display: 'flex', alignItems: 'center' }}></div>
          <input
            type="number"
            value={numberOfNFTs}
            onChange={handleInputChange}
            placeholder=""
            style={{ marginBottom: '5px' }}
          />
          <span style={{ marginLeft: '5px' }}>NFT</span>
        </div>
        
        <button onClick={mintNFTs}>mint NFT</button>
      </div>
      
    );
  }

export default Mint;
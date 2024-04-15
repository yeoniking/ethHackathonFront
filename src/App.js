import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import Proposal from "./Proposal.js";
import Mint from "./Mint"
import Funding from "./Funding";
import Proposal from "./Proposal";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Proposal" element={<Proposal />} />
      <Route exact path="Mint" element={<Mint />} />
      <Route exact path="/Funding" element={<Funding />} />
    </Routes> 
  );
}



export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import NavBar from './NavBar';

function Proposal() {
    return(
        <div className="App">
            <Container className="d-flex justify-content-center mt-4">
                <NavBar />
            </Container>
        </div>
    )
}

export default Proposal;
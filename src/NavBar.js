import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import React, { useState } from 'react';

function NavBar() {
    return (
      <div className="App">
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/Home">MEMEDAO</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/Proposal">Proposal</Nav.Link>
                <Nav.Link href="/Funding">Funding</Nav.Link>
                <Nav.Link href="./Mint"><strong>Mint</strong></Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavBar;
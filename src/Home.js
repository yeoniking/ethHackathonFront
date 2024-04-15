import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import React from 'react';
import NavBar from './NavBar';

function Home() {
    return (
      <div className="App">
        <title>Home page</title>
        <Container className="d-flex justify-content-center mt-4">
            <NavBar />
        </Container>
      </div>
    )
}

export default Home;
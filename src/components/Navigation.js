import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../data/logo.png';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand='md' fixed='bottom'>
            <Navbar.Brand>
              <img src={logo} width="50"/>
              <span>Horizonism &copy;</span>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar"/>
    
            <Navbar.Collapse>
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href='/Howry/'>Home</Nav.Link>
              <Nav.Link href='/Howry/ghosts'>Ghosts</Nav.Link>
              <Nav.Link href='/Howry/about'>About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Navigation
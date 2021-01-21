import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../data/logo.png';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand='lg'>
            <Navbar.Brand className='ml-5'>
              <img src={logo} width="50"/>
              <span>Howry</span>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar"/>
    
            <Navbar.Collapse>
            <Nav className="mr-auto"></Nav>
            <Nav className='mr-5'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/ghosts'>Ghosts</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Navigation
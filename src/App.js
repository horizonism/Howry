import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Jumbotron } from 'react-bootstrap'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
class App extends Component{
  render(){
    return(
      <div>
        <Navigation />
        <Home />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import { BrowserRouter as Router } from 'react-router-dom'
class App extends Component{
  render(){
    return(
      <div>
        <Home />
        <Navigation />
      </div>
    )
  }
}

export default App;

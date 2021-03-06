import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Ghosts from './components/Ghosts'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path='/Howry/' component={Home}/>
            <Route path='/Howry/ghosts' component={Ghosts}/>
            <Route path='/Howry/about' component={About}/>
            <Route path='/Howry/login' component={Login}/>
            <Route path='/Howry/signup' component={Register}/>
          </Switch>
          <Navigation />
        </Router>
      </div>
    )
  }
}

export default App;

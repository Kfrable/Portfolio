import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Link,Switch,NavLink} from 'react-router-dom'

import Naver from './Components/Nav'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'


class App extends Component {
  render() {
    return (
      <div>
      <Naver/>
      <Router>

        <div id="wrapper">
        <Switch>
        <Route path="/About" exact component={About}></Route>
        <Route path="/Skills" exact component={Skills}></Route>
        <Route path="/Projects" exact component={Projects}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        {/*<Route path="/contact" exact component={Contact}></Route>*/}
        <Route path="/" exact component={Home}></Route>
       
        </Switch>
        
        </div>

      </Router>
      </div>
    );
  }
}

export default App;
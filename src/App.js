import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Link,Switch,NavLink} from 'react-router-dom'

import Nav from './Components/Nav'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

/*let About = () => <div>Blue pill or red?</div>
let Home = () => <div>You are now home</div>*/
class App extends Component {
  render() {
    return (
      
        <div>
          <Nav/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
          
        </div>
      
    );
  }
}

export default App;

// <Router>
//         <div id="wrapper">
//         <NavLink to="/home">Home</NavLink>&nbsp;&nbsp;
//         <NavLink to="/projects" activeClassName="iamlit">Projects</NavLink>&nbsp;&nbsp;
//         <NavLink to="/test">Test</NavLink>&nbsp;&nbsp;
//         <Switch>
//         <Route path="/home" exact component={Matrix}></Route>
//         c
//         <Route path="/yamilPage"exact component={Yamil}></Route>
//         <Route path="/projects" exact component={Projects}></Route>
//         <Route path="/*" component={FourOFoour}></Route>
//         </Switch>
//         </div>
//       </Router>
import React from 'react'
import {
  Navbar,Header,Brand,Toggle,Collapse,Nav,NavItem,NavDropdown,MenuItem
} from 'react-bootstrap';

function Naver(){
	return (
      <div>
        

          <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Kyle Frable</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/contact">Contact</NavItem>
        {/*<NavItem eventKey={2} href="#">Link</NavItem>*/}
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/about">About</MenuItem>
          <MenuItem eventKey={3.2} href="/projects">Projects</MenuItem>
          <MenuItem eventKey={3.3} href="/skills">Skills</MenuItem>
          
          <MenuItem eventKey={3.3} href="/contact">Contact</MenuItem>
          {/*<MenuItem eventKey={3.3} href="/">Home</MenuItem>*/}
          
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>

        
      </div>
    )
}

export default Naver
import React from 'react';
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {  
  constructor(props, context) {
    super(props, context);

    this.onNavItemClick = this.onNavItemClick.bind(this);
    this.onNavbarToggle = this.onNavbarToggle.bind(this);

    this.state = {
      navExpanded: false
    }; 
  }

  onNavItemClick() {
    this.setState({ navExpanded: false });
  }

  onNavbarToggle() {
    this.setState({ navExpanded: ! this.state.navExpanded });
  }


  render() {
    return (
      <Navbar toggleNavKey={1} onToggle={this.onNavbarToggle} expanded={this.state.navExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">ToDo</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/"><NavItem eventKey={1} onClick={this.onNavItemClick}>Home</NavItem></IndexLinkContainer>
            <LinkContainer to="/About"><NavItem eventKey={2} onClick={this.onNavItemClick}>About</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
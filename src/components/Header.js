import React from 'react';
import BaseComponent from '../tools/BaseComponent';
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

/**
 * Header Component 
 *
 * React-Boostrap header with the Navbar
 */
class Header extends BaseComponent {  
  constructor(props, context) {
    super(props, context);

    // bind class methods
    this._bind('onNavItemClick', 'onNavbarToggle');

    this.state = {
      /** menu close/open indicator */
      navExpanded: false
    };
  }

  /**
   * Called everytime menu item selected. Closes the menu 
   */
  onNavItemClick() {
    this.setState({ navExpanded: false });
  }

  /**
   * Called when menu toggled, syncs menu state with component state
   */
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
import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const App = (props) => (
  <Grid fluid={true}>
    <Row>
      <Col>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">ToDo</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>
              <LinkContainer to="/About"><NavItem eventKey={2}>About</NavItem></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
    <Row>
      <Col xs={10} xsOffset={1}>
        {props.children}
      </Col>
    </Row>
  </Grid>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;
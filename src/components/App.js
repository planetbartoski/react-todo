import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';

const App = (props) => (
  <Grid fluid={true}>
    <Row>
      <Col>
        <Header />
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
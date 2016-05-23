import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Footer from './Footer';

const App = (props) => (
  <div>
    <IndexLink to="/">Home</IndexLink> | <Link to="/About">About</Link>
    {props.children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;
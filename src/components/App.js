import React, { PropTypes } from 'react';
import Header from './Header';

/**
 * The App Component, pure
 *
 * Renders the App: Header and Content
 *
 * @param {object} props - properties
 */
const App = (props) => (
  <div className="appWrapper">
    <Header />
    <div className="contentWrapper">
      {props.children}
    </div>
  </div>
);

/**
 * Prop Types
 */
App.propTypes = {
  children: PropTypes.element
};

export default App;
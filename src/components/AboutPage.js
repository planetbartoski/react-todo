import React from 'react';
import { Link } from 'react-router';
import '../styles/aboutPage.css';

/**
 * About Page Component, pure
 *
 * Renders basic About Page 
 */
const AboutPage = () => {
  return (
    <div className="aboutPage">
      <h2 className="alt-header">About</h2>
      <p>Todo App</p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;

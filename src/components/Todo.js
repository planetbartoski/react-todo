import React, { PropTypes } from 'react';

/**
 * Todo Component 
 *
 * single todo item
 * @param {function} onClick - called when user clicks on the item
 * @param {boolean} completed - true if item is completed, false otherwise
 * @param {string} text - item's text
 */
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={completed ? 'completed' : ''}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
  </li>
);

/**
 * Prop Types
 */
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
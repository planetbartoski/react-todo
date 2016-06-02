import React, { PropTypes } from 'react';
import Todo from './Todo';

/**
 * Todo List Component
 *
 * list of todos
 * @param {array} todos - array of todo items
 * @param {function} onTodoClick - called when user clicks 
 *  one of the todo item
 */
const TodoList = ({ todos, onTodoClick }) => (
  <ul className="todoList">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

/**
 * Prop Types
 */
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoSelector from './TodoSelector';

/**
 * TodoPage Component, renders the Todo app on the screen 
 */
const TodoPage = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoSelector />
  </div>
);

export default TodoPage;
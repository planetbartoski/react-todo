import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoSelector from './TodoSelector';
import '../styles/todoPage.scss';

/**
 * TodoPage Component
 * 
 * renders the AddTodo, VisibleTodoList and TodoSelector
 */
const TodoPage = () => (
  <div className="todoPage">
    <AddTodo />
    <VisibleTodoList />
    <TodoSelector />
  </div>
);

export default TodoPage;
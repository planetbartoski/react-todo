import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoSelector from './TodoSelector';
import '../styles/todoPage.scss';

/**
 * TodoPage Component, renders the Todo app on the screen 
 */
const TodoPage = () => (
  <div className="todoPage">
    <AddTodo />
    <VisibleTodoList />
    <div className="todoSelectorWrapper">
      <TodoSelector />
    </div>
  </div>
);

export default TodoPage;
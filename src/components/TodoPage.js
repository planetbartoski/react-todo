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
    <div class="todoSelectorWrapper">
      <TodoSelector />
    </div>
  </div>
);

export default TodoPage;
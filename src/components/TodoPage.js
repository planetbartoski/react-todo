import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const TodoPage = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default TodoPage;
import React from 'react';
import { should } from 'chai'; should();
import sinon from 'sinon';
import { mapStateToProps, mapDispatchToProps} from './VisibleTodoList';
import VisibilityFilter from '../constants/VisibilityFilter';
import { setVisibilityFilter, toggleTodo } from '../actions/todoActions';


describe('<VisibleTodoList mapStateToProps />', () => {
  const todos = [{
    id: 0,
    completed: false,
    text: 'one'
  },{
    id: 1,
    completed: false,
    text: 'two'
  },{
    id: 2,
    completed: true,
    text: 'three'
  }];
	
  it('SHOW_ALL', () => {
    const state = {
      visibilityFilter: VisibilityFilter.SHOW_ALL,
      todos: todos
    };
    mapStateToProps(state).todos.should.have.length(todos.length);
	});
  it('SHOW_COMPLETED', () => {
    const state = {
      visibilityFilter: VisibilityFilter.SHOW_COMPLETED,
      todos: todos
    };
    mapStateToProps(state).todos.every(t => t.completed).should.be.true;
  });
  it('SHOW_ACTIVE', () => {
    const state = {
      visibilityFilter: VisibilityFilter.SHOW_ACTIVE,
      todos: todos
    };
    mapStateToProps(state).todos.every(t => !t.completed).should.be.true;
  });
});

describe('<VisibleTodoList mapDispatchToProps />', () => {

  it('onClick passes action to dispatch', () => {
    const onClickSpy = sinon.spy();
    const id = 0;
    
    mapDispatchToProps(onClickSpy).onTodoClick(id);
    onClickSpy.calledWith(toggleTodo(id)).should.be.true;
  });
});

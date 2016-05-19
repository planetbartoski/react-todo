import React from 'react';
import { expect } from 'chai';
import * as ActionCreators from './todoActions';
import * as ActionTypes from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';

describe('todoActions', function() {
  const appState = {
  };

  it('should create an action to add new todo item', function() {
    const newTodoItem = 'new todo item';

    const expected = {
      id: 0,
      type: ActionTypes.ADD_TODO,
      text: newTodoItem
    };

    expect(ActionCreators.addTodo(newTodoItem)).to.deep.equal(expected);
  });

  it('should create an action to toggle a todo item', function() {
    const id = 0;

    const expected = {
      type: ActionTypes.TOGGLE_TODO,
      id: id
    };

    expect(ActionCreators.toggleTodo(id)).to.deep.equal(expected);
  });

  it('should create an action to set the visibility filter', function() {
    const filter = VisibilityFilter.SHOW_COMPLETED;

    const expected = {
      type: ActionTypes.SET_VISIBILITY_FILTER,
      filter: filter
    };

    expect(ActionCreators.setVisibilityFilter(filter)).to.deep.equal(expected);
  });

});

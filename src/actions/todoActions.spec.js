//import React from 'react';
import { expect, should } from 'chai'; should();
import * as ActionCreators from './todoActions';
import * as ActionTypes from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';

describe('todoActions', function() {
  const appState = {
  };

  it('addTodo should create an action to add new todo item', function() {
    const text = 'new todo item';

    const expected = {
      type: ActionTypes.ADD_TODO,
      id: 0,
      text: text
    };

    ActionCreators.addTodo(text).should.deep.equal(expected);
  });

  it('toggleTodo should create an action to toggle a todo item', function() {
    const id = 0;

    const expected = {
      type: ActionTypes.TOGGLE_TODO,
      id: id
    };

    ActionCreators.toggleTodo(id).should.deep.equal(expected);
  });

  it('setVisibilityFilter should create an action to set the visibility filter', function() {
    const filter = VisibilityFilter.SHOW_COMPLETED;

    const expected = {
      type: ActionTypes.SET_VISIBILITY_FILTER,
      filter: filter
    };

    ActionCreators.setVisibilityFilter(filter).should.deep.equal(expected);
  });

});

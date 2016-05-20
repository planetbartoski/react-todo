//import React from 'react';
import { should } from 'chai'; should();
import * as ActionCreators from './todoActions';
import * as ActionTypes from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';

describe('todoActions', function() {

  it('addTodo should create an action to add new todo item', function() {
    const text = 'new todo item';
    const action = ActionCreators.addTodo(text);

    action.type.should.equal(ActionTypes.ADD_TODO);
    action.text.should.equal(text);
  });

  it('toggleTodo should create an action to toggle a todo item', function() {
    const id = 0;
    const action = ActionCreators.toggleTodo(id);

    action.type.should.equal(ActionTypes.TOGGLE_TODO);
    action.id.should.equal(id);
  });

  it('setVisibilityFilter should create an action to set the visibility filter', function() {
    const filter = VisibilityFilter.SHOW_COMPLETED;
    const action = ActionCreators.setVisibilityFilter(filter);

    action.type.should.equal(ActionTypes.SET_VISIBILITY_FILTER);
    action.filter.should.equal(filter);
  });
});

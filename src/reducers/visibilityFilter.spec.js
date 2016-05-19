import React from 'react';
import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';
import { initialState, visibilityFilter } from './visibilityFilter';

describe('Reducers::visibilityFilter', function() {

  const getAppState = () => {
    return VisibilityFilter.SHOW_ALL;
  };

  it('should set initial state by default', function() {
    const action = { type: 'unknown' };
    const expected = initialState;

    expect(visibilityFilter(undefined, action)).to.deep.equal(expected);
  });

  it('should handle SET_VISIBILITY_FILTER', function() {
    const action = { type: ActionTypes.SET_VISIBILITY_FILTER, filter: visibilityFilter.SHOW_COMPLETED };
    const expected = action.filter;

    expect(visibilityFilter(initialState, action)).to.deep.equal(expected);
  });
});

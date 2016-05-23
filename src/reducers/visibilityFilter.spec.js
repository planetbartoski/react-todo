import { should } from 'chai'; should();
import * as ActionTypes from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';
import { visibilityFilter, initialState } from './visibilityFilter';

describe('Reducers::visibilityFilter', function() {

  it('should set initial state by default', function() {
    const action = { type: 'unknown' };

    visibilityFilter(undefined, action).should.deep.equal(initialState);
  });

  it('should handle SET_VISIBILITY_FILTER', function() {
    const action = { type: ActionTypes.SET_VISIBILITY_FILTER, filter: VisibilityFilter.SHOW_COMPLETED };

    visibilityFilter(initialState, action).should.deep.equal(action.filter);
  });
});

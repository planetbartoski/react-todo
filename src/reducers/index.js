import { combineReducers } from 'redux';
import * as todos from './todos';
import * as visibilityFilter from './visibilityFilter';

/**
 * Combined initial state
 */
export const initialState = {
  todos: todos.initialState,
  visibilityFilter: visibilityFilter.initialState
};

/**
 * Combined reducers
 */
export default combineReducers({
  todos: todos.todos,
  visibilityFilter: visibilityFilter.visibilityFilter
});

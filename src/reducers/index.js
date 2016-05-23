import { combineReducers } from 'redux';
import * as todos from './todos';
import * as visibilityFilter from './visibilityFilter';

export const initialState = {
  todos: todos.initialState,
  visibilityFilter: visibilityFilter.initialState
};

export default combineReducers({
  todos: todos.todos,
  visibilityFilter: visibilityFilter.visibilityFilter
});

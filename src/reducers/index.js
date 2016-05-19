import { combineReducers } from 'redux';
import { visibilityFilter } from './visibilityFilter';
import { todos } from './todos';

const rootReducer = combineReducers({
  visibilityFilter,
  todos
});

export default rootReducer;

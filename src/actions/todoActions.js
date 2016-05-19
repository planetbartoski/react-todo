import * as ActionTypes from '../constants/actionTypes';

/*
 * action creators
 */

let nextTodoId = 0;
export function addTodo(text) {
  return { 
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text 
  };
}

export function toggleTodo(id) {
  return { 
    type: ActionTypes.TOGGLE_TODO, 
    id 
  };
}

export function setVisibilityFilter(filter) {
  return { 
    type: ActionTypes.SET_VISIBILITY_FILTER, 
    filter 
  };
}

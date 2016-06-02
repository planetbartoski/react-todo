import * as ActionTypes from '../constants/actionTypes';

/**
 * Action Creators
 */

let nextTodoId = 0;
/**
 * Creates addTodo action 
 *
 * @param {string} text - text of the new todo item
 */
export function addTodo(text) {
  return { 
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text 
  };
}

/**
 * Creates toggleTodo action 
 *
 * @param {number} id - id of the item to be toggled
 */
export function toggleTodo(id) {
  return { 
    type: ActionTypes.TOGGLE_TODO, 
    id 
  };
}

/**
 * Creates setVisibilityFilter action 
 *
 * @param {VisibilityFilter} filter - filter to be used
 */
export function setVisibilityFilter(filter) {
  return { 
    type: ActionTypes.SET_VISIBILITY_FILTER, 
    filter 
  };
}

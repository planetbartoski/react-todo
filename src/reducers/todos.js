import {ADD_TODO, TOGGLE_TODO} from '../constants/actionTypes';

/**
 * Initial state of the todo list = []
 */
export const initialState = [];

/**
 * Todo list reducer
 *
 * Executes actions on todos list
 *
 * @param {array} [state = initialState] - current state
 * @param {object} action - action to act upon
 * @returns {array} - new state
 */
export function todos(state = initialState, action) {
  switch (action.type) {
    
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    
    case TOGGLE_TODO:
      return state.map( t => {
        if (t.id !== action.id) {
          return t;
        }

        return Object.assign({}, t, {
          completed: !t.completed
        });
      });
    
    default:
      return state;
  
  }
}

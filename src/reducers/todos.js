import {ADD_TODO, TOGGLE_TODO} from '../constants/actionTypes';
import objectAssign from 'object-assign';

export const initialState = [];

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

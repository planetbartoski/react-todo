import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';
import objectAssign from 'object-assign';

export const initialState = VisibilityFilter.SHOW_ALL;

export function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
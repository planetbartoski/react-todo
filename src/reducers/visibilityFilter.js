import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';

/**
 * Initial state of the visibility filter = SHOW_ALL
 */
export const initialState = VisibilityFilter.SHOW_ALL;

/**
 * Visibility filter reducer
 *
 * Executes actions on visibility filter
 *
 * @param {array} [state = initialState] - current state
 * @param {object} action - action to act upon
 * @returns {array} - new state
 */
export function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
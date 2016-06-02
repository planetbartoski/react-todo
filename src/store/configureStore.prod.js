import { createStore } from 'redux';
import rootReducer, { initialState } from '../reducers';

/**
 * Production store configuration 
 */
export default function configureStore(initialStateLocal = initialState) {
  return createStore(rootReducer, initialStateLocal);
}

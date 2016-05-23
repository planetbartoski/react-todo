import { createStore } from 'redux';
import rootReducer, { initialState } from '../reducers';

export default function configureStore(initialStateLocal = initialState) {
  return createStore(rootReducer, initialStateLocal);
}

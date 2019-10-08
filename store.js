// store.js

import { createStore, combineReducers } from 'redux';
import placeReducer from './reducers/placeReducer';

const rootReducer = combineReducers({
  gallery: placeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
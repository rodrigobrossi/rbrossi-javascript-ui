import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { myBooks } from '../reducers/MyBooksReducer';
import { navbar } from '../reducers/NavbarReducer';

export default function configureStore(initialState) {
  const reducers = combineReducers({ myBooks, navbar });

  return createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f));
}

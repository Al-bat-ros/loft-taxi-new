import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from './reducers';
import { authMiddleware } from './thunk/authMiddleware';

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));

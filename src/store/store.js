import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from './reducers';
import  createSagaMiddleware from 'redux-saga'
import { mainSaga } from './middlewares/sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga)


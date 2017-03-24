import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import mySaga from './sagas/sagas';
import rootReducer from './reducers/index';


const defaultStore = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  defaultStore,
  applyMiddleware(promise(), thunk, sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export default store;

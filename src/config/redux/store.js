import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const Store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware), applyMiddleware(thunk)),
);
sagaMiddleware.run(rootSaga);

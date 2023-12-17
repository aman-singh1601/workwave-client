import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import authSaga from './auth/login/saga';



const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
    {
        reducer:rootReducer,
        middleware:() => [sagaMiddleware]
    }
);
sagaMiddleware.run(rootSaga);

export default store;
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';



const sagaMiddileware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    composeEnhancers(applyMiddleware(sagaMiddileware))
);
// sagaMiddileware.run(rootSaga);

export default store;
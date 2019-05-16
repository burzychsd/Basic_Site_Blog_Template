import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './../rootReducer'

const initialState = {};

const store = createStore(
        rootReducer, 
        initialState, 
        compose(applyMiddleware(thunk),
        (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose())
);

if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./../rootReducer', () => {
                const nextRootReducer = require('./../rootReducer');
                store.replaceReducer(nextRootReducer);
        });
}

export default store
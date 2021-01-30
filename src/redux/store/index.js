import { createStore, applyMiddleware, compose } from 'redux';

// middlewares
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

// Import custom components
import rootReducer from '../reducers';


function saveToLocalStorage(state) {
    try {
        let serializedState ;
         serializedState = JSON.stringify(state)
        if (typeof window !== 'undefined') {
        localStorage.setItem('state', serializedState)
        }
    }catch(e){
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        let serializedState ;
        if (typeof window !== 'undefined') {
             serializedState = localStorage.getItem('state')
        }
       
        if(serializedState === null || serializedState == undefined) return undefined
        return JSON.parse(serializedState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}
    let composeEnhancers = compose;
const persistedState = loadFromLocalStorage()
if (typeof window !== 'undefined') {
     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(thunkMiddleware, loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
      })),
    
      

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    // if (typeof window !== 'undefined') {
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    //     return f;
    // }
    // }
));

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});

export default store;
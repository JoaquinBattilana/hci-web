import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { reducer as form} from 'redux-form';
import dispositives from './dipositives';

import thunk from 'redux-thunk';

const rootReducer = () => 
    combineReducers({
        form,
        dispositives
});

const enhancers = [applyMiddleware(thunk)];
//need for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer(), composeEnhancers(...enhancers));
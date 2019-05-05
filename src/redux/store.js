import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { reducer as form} from 'redux-form';
import thunk from 'redux-thunk';

const rootReducer = () => 
    combineReducers({
        form
});

const enhancers = [applyMiddleware(thunk)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer(), composeEnhancers(...enhancers));
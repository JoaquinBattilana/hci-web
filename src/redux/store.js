import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { reducer as form} from 'redux-form';
import dispositives from './dipositives/reducer';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import thunk from 'redux-thunk';

const rootReducer = routerHistory => 
    combineReducers({
        form,
        dispositives,
        router: connectRouter(routerHistory)
});

export const history = createBrowserHistory();

const enhancers = [applyMiddleware(thunk, routerMiddleware(history))];
//need for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer(history), composeEnhancers(...enhancers));
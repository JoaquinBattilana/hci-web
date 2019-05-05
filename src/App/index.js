import React from 'react';
import Main from './screens/Main';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from '../redux/store';

function App() {
    return (
        <ConnectedRouter history={history} >
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </ConnectedRouter>
    );
}

export default App;

import React from 'react';
import Main from './screens/Main';
import Dispositives from './screens/Main/screens/Dispositives';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from '../redux/store';

function App() {
    return (
        <ConnectedRouter history={history} >
            <Route path="/" component={Main} />
        </ConnectedRouter>
    );
}

export default App;

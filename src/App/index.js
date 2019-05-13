import React from 'react';
import Main from './screens/Main';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { history } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    return (
      <ConnectedRouter history={history} >
          <ToastContainer />
          <Route path="/" component={Main} />
      </ConnectedRouter>
    );
}

export default App;

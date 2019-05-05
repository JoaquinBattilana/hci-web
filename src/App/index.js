import React from 'react';
import Main from './screens/Main';
import { Provider } from 'react-redux';
import store from '../redux/store';

function App() {
    return (
    <Provider store={store}>
        <Main />
    </Provider>
    );
}

export default App;

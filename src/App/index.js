import React from 'react';
import Main from './screens/Main';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { history } from '../redux/store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#9c4dcc',
        main: '#6a1b9a',
        dark: '#38006b',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff6f60',
        main: '#e53935',
        dark: '#ab000d',
        contrastText: '#000',
      },
    },
  });

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <ConnectedRouter history={history} >
                <Route path="/" component={Main} />
            </ConnectedRouter>
        </MuiThemeProvider>
    );
}

export default App;

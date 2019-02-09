import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: "#222",
            type: 'dark'
        }
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router />
    </MuiThemeProvider>
    , document.getElementById('root'));

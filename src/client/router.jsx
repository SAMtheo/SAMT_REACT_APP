import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/home.jsx';

const theme = createMuiTheme();

const app = (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </MuiThemeProvider>
);

reactDOM.render(app, document.getElementById('app'));

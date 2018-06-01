import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home.jsx';

const app = (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

reactDOM.render(app, document.getElementById('main'));

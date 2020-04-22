import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './pages/contact';
import Home from './pages/home';
import Company from './pages/company';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App}/>
        <Route path="/home" exact={true} component={Home}/>
        <Route path="/contato" exact={true} component={Contact}/>
        <Route path="/company/:name" exact={true} component={Company}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

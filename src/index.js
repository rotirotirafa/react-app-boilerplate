import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './pages/contact';
import Home from './pages/home';
import Company from './pages/company';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={App}/>
          <Route path="/home" exact={true} component={Home}/>
          <Route path="/contato" exact={true} component={Contact}/>
          <Route path="/company/:name" exact={true} render={(props) => <Company {...props} message="Acesso liberado"  />} />}/>
        </Switch>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

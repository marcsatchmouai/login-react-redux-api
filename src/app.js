import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import List from './components/listado'
import Add from './components/agregar'

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/listado'} component={List} />
      <Route exact path={'/agregar'} component={Add} />
    </Router>
  );
}

export default App;

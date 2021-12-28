import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Login from './components/login'
import Home from './components/home'
import FilmList from './components/films/filmList'
import AddFilm from './components/films/addFilm'
import EditFilm from './components/films/editFilm'

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/filmList'} component={FilmList} />
      <Route exact path={'/addFilm'} component={AddFilm} />
      <Route exact path={'/editFilm/:id'} component={EditFilm} />
    </Router>
  );
}

export default App;

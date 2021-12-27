import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import filmsReducer from './filmsReducer';

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  login: loginReducer,
  films: filmsReducer
});

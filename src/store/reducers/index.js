import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  films: filmsReducer,
});

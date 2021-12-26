import {
    ADD_FILM,
    ADD_FILM_SUCCESS,
    ADD_FILM_ERROR,
    GET_FILMS,
    GET_FILMS_SUCCESS,
    GET_FILMS_ERROR,
    DELETE_FILM,
    DELETE_FILM_SUCCESS,
    DELETE_FILM_ERROR,
    EDIT_FILM,
    EDIT_FILM_SUCCESS,
    EDIT_FILM_ERROR,
  } from '../../types/films';
  
  // Cada reducer tiene su propio State.
  const initialState = {
    films: [],
    error: null,
    loading: false,
    film: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_FILM:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_FILM_SUCCESS:
        return {
          ...state,
          loading: false,
          films: [...state.films, action.payload],
          error: false,
        };
  
      case ADD_FILM_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case GET_FILMS:
        return {
          ...state,
          loading: true,
        };
  
      case GET_FILMS_SUCCESS:
        return {
          ...state,
          loading: false,
          films: action.payload,
          error: false,
        };
  
      case GET_FILMS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case DELETE_FILM:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_FILM_SUCCESS:
        return {
          ...state,
          loading: false,
          films: state.films.filter(
            (film) => film._id !== action.payload
          ),
          error: false,
        };
  
      case DELETE_FILM_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case EDIT_FILM:
        return {
          ...state,
          loading: false,
          film: action.payload,
        };
  
      case EDIT_FILM_SUCCESS:
        return {
          ...state,
          loading: false,
          films: state.films.filter(
            (film) => film._id !== action.payload
          ),
          error: false,
        };
  
      case EDIT_FILM_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
      default:
        return state;
    }
  }
  
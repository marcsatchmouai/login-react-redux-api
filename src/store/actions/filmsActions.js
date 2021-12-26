import Swal from 'sweetalert2';
import client from '../../config/axios';
import {
  ADD_FILM,
  ADD_FILM_SUCCESS,
  ADD_FILM_ERROR,
  EDIT_FILM,
  EDIT_FILM_SUCCESS,
  EDIT_FILM_ERROR,
  DELETE_FILM,
  DELETE_FILM_SUCCESS,
  DELETE_FILM_ERROR,
  GET_FILMS,
  GET_FILMS_SUCCESS,
  GET_FILMS_ERROR,
} from '../../types/films';

const filmUrl = '/film';

// Agregar Nueva Pelicula.
export function addNewFilmAction(film) {
  return async (dispatch) => {
    dispatch(addNewFilm());
    try {
      // Primero intenta agregar una pelicula. Cargando = True.
      await client.post(`${filmUrl}`, film);
      // Si la agrega correctamente, dispara la accion con el objeto de pelicula cargado correctamente.
      dispatch(addNewFilmSuccess(film));

      // Alerta exitosa.
      Swal.fire(
        'Correcto',
        'La pelicula se agrego correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      // Si falla, envia una notificacion de error.
      dispatch(addNewFilmError(true));
      // Alerta de error.
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error, intenta de nuevo.',
      });
    }
  };
}

const addNewFilm = () => ({
  type: ADD_FILM,
});

// Si la pelicula se guarda en la base de datos.
const addNewFilmSuccess = (film) => ({
  type: ADD_FILM_SUCCESS,
  payload: film,
});

// Si ocurre un error en el guardado de la pelicula.
const addNewFilmError = (status) => ({
  type: ADD_FILM_ERROR,
  payload: status,
});

// Obtener todos las Peliculas.
export function getAllFilmsAction() {
  return async (dispatch) => {
    dispatch(getAllFilms());
    try {
      const { data } = await client.get(`${filmUrl}/all`);
      dispatch(getAllFilmsSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllFilmsError(true));
    }
  };
}

const getAllFilms = () => ({
  type: GET_FILMS,
});

const getAllFilmsSuccess = (films) => ({
  type: GET_FILMS_SUCCESS,
  payload: films,
});

const getAllFilmsError = (status) => ({
  type: GET_FILMS_ERROR,
  payload: status,
});

// Eliminar Pelicula.
export const deleteFilmAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteFilm());
    try {
      await client.delete(`${filmUrl}/${id}`);
      dispatch(deleteFilmSuccess(id));
      Swal.fire(
        'Eliminado',
        'La pelicula se elimino correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteFilmError(true));
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error al eliminar la pelicula, intenta de nuevo.',
      });
    }
  };
};

const deleteFilm = () => ({
  type: DELETE_FILM,
});

const deleteFilmSuccess = (id) => ({
  type: DELETE_FILM_SUCCESS,
  payload: id,
});

const deleteFilmError = (status) => ({
  type: DELETE_FILM_ERROR,
  payload: status,
});

// Editar Pelicula.
export const editFilmAction = (film) => {
  return async (dispatch) => {
    dispatch(editFilm(film));
  };
};

const editFilm = (film) => ({
  type: EDIT_FILM,
  payload: film,
});

const editFilmSuccess = (film) => ({
  type: EDIT_FILM_SUCCESS,
  payload: film,
});

const editFilmError = (status) => ({
  type: EDIT_FILM_ERROR,
  payload: status,
});

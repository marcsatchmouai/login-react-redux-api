import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

import {
    deleteFilmAction,
    editFilm,
} from '../../../store/actions/filmsActions';
  

const List = ({ film }) => {
    const { _id, titulo, genero, anio, duracion, director } = film;

    const dispatch = useDispatch();
    const history = useHistory(); // Habilitar history para redireccionar.

    const onDeleteFilm = (id) => {
        // preguntar al usuario
        Swal.fire({
          title: '¿Estas seguro?',
          text: 'Esta accion es irreversible.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.value) {
            dispatch(deleteFilmAction(id));
          }
        });
    };

    const onEditRedirection = (id) => {
        dispatch(editFilm(film));
        history.push(`/editFilm/${id}`);
    };

    return (
        <tr>
            <td>{titulo}</td>
            <td>{genero}</td>
            <td>{anio}</td>
            <td>{duracion}</td>
            <td>{director}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={() => onEditRedirection(_id)}
                    >
                        Editar
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => onDeleteFilm(_id)}
                    >
                        Eliminar
                    </button>
                </div>              
            </td>
        </tr>
    )
}

export default List
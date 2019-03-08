import {
  FETCH_ARTICULOS,
  FETCH_CLIENTES,
  LIST_ARTICLES,
  ADD_TITLE
} from "./types";

export const fetchArticulos = () => dispatch => {
  const url = 'http://localhost:3000/articulos';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_ARTICULOS,
          payload: data.info
        })
      })
      .catch(err => console.log(err));
};

export const fetchClientes = () => dispatch => {
  const url = 'http://localhost:3000/clientes';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_CLIENTES,
          payload: data.info
        })
      })
      .catch(err => console.log(err));
};

export const addArticles = nuevoArticulo => ({
  type: LIST_ARTICLES,
  payload: nuevoArticulo
});

export const addTitle = (cliente) => ({
  type: ADD_TITLE,
  payload: cliente
});
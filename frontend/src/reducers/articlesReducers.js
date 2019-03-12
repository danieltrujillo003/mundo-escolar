import { LIST_ARTICLES, DELETE_ARTICLE } from "../actions/types";

const initialState = {
  listaArticulos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_ARTICLES:
      let listaArticulos = [...state.listaArticulos, action.payload];
      return {
        ...state,
        listaArticulos
      };
    case DELETE_ARTICLE:
      let index = state.listaArticulos.indexOf(action.payload);
      let listaReducida = [...state.listaArticulos.slice(0,index),...state.listaArticulos.slice(index+1)]
      return {
        ...state,
        listaArticulos: listaReducida
      };
    default:
      return state;
  }
};

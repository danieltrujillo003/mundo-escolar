import {
  FETCH_ARTICULOS,
  FETCH_CLIENTES,
  LIST_ARTICLES
} from "../actions/types";

const initialState = {
  valuesClientes: [],
  valuesArticulos: []
  // listaArticulos: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_ARTICULOS:
      return {
        ...state,
        valuesArticulos: action.payload
      };
    case FETCH_CLIENTES:
      return {
        ...state,
        valuesClientes: action.payload
      };
    // case LIST_ARTICLES:
    //   console.log("hey");
    //   return {
    //     ...state,
    //     listaArticulos: action.payload
    //   };
    default:
      return state;
  }
};

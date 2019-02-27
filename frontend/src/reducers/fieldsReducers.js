import {
  FETCH_ARTICULOS,
  FETCH_CLIENTES
} from "../actions/types";

const initialState = {
  valuesClientes: [],
  valuesArticulos: []
};

export default (state = initialState, action) => {
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
    default:
      return state;
  }
};

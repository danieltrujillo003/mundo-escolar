import { FETCH_ARTICULOS, FETCH_CLIENTES, ADD_TITLE } from "../actions/types";

const initialState = {
  valuesClientes: [],
  valuesArticulos: [],
  actualCliente: ""
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
    case ADD_TITLE:
      return {
        ...state,
        actualCliente: action.payload
      };
    default:
      return state;
  }
};

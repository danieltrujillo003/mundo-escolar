import { LIST_ARTICLES } from "../actions/types";

const initialState = {
  listaArticulos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_ARTICLES:
      state.listaArticulos.push(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
};

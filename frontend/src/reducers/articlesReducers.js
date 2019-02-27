import { LIST_ARTICLES } from "../actions/types";

const initialState = {
  listaArticulos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_ARTICLES:
      console.log("hey");
      return {
        ...state,
        listaArticulos: action.payload
      };
    default:
      return state;
  }
};

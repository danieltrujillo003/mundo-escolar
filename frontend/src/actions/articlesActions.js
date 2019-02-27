import { LIST_ARTICLES } from "./types";

export const addArticles = nuevoArticulo => ({
  type: LIST_ARTICLES,
  payload: nuevoArticulo
});

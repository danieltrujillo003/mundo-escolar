import { LIST_ARTICLES } from "./types";

export const addArticles = nuevoArticulo => {
  console.log(nuevoArticulo);
  return {
  type: LIST_ARTICLES,
  payload: nuevoArticulo
}};

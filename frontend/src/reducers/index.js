import { combineReducers } from "redux";
import FieldsReducer from "./fieldsReducers";
import ArticlesReducer from "./articlesReducers";

export const rootReducer = combineReducers({
  fields: FieldsReducer,
  articles: ArticlesReducer
});

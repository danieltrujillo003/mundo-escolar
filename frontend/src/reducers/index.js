import { combineReducers } from "redux";
import FieldsReducer from "./fieldsReducers";

export const rootReducer = combineReducers({
  fields: FieldsReducer
});

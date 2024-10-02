import authReducer from "./authReducer";
import { combineReducers } from "redux";
import popupReducer from "./popupReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  popup: popupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

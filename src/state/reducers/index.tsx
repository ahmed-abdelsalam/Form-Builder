import { combineReducers } from "redux";
import { builderReducer } from "./builderReducer";
import { layoutReducer } from "./layoutReducer";
import { uiReducer } from "./uiReducer";

const rootReducer = combineReducers({
  builder: builderReducer,
  savedForms: layoutReducer,
  ui: uiReducer,
});

export type AppState = typeof rootReducer;
export default rootReducer;

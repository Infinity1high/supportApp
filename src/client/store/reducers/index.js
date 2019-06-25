import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import AuthReducer from "./auth";
import CallReducer from "./callReducer";
import GetCallReducer from "./callsListReducer";

const reducers = combineReducers({
  AuthReducer,
  CallReducer,
  GetCallReducer,
  form: formReducer
});

export default reducers;

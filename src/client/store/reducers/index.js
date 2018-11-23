import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './auth';
import CallReducer from './callReducer';

const reducers = combineReducers({
  AuthReducer,
  CallReducer,
  form: formReducer
});

export default reducers;

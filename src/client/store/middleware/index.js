import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

const middleware = [
  ReduxThunk,
  ReduxLogger
];


export default applyMiddleware(...middleware);

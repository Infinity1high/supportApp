import { createStore } from 'redux';

import reducers from './reducers';
import middleware from './middleware';

const store = createStore(
  reducers,
  {
    AuthReducer: {
      authenticated: localStorage.getItem('token')
    }
  },
  middleware
);

console.log(store.getState());

export default store;

import { GET_CALLS, GET_CALLS_ERROR } from '../actions/GetCallsAction';

const initState = {
  errorMessage: '',
  calls: []
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_CALLS:
      return {
        ...state,
        calls: action.payload.list,
        totalItems: action.payload.totalItems,
      };
    case GET_CALLS_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

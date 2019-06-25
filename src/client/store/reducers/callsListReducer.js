import { GET_CALLS, GET_CALLS_ERROR } from "../actions/GetCallsAction";
import { REMOVE_CALL, REMOVE_CALL_ERROR } from "../actions/CallActions";

const initState = {
  errorMessage: "",
  calls: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_CALLS:
      return {
        ...state,
        calls: action.payload.list,
        totalItems: action.payload.totalItems
      };
    case GET_CALLS_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case REMOVE_CALL: {
      console.log(action.payload);
      return {
        ...state,
        calls: [...state.calls.filter(call => call._id !== action.payload)]
      };
    }
    case REMOVE_CALL_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

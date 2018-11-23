import { SAVE_CALL, SAVE_CALL_ERROR } from "../actions/CallActions";

const initState = {
  errorMessage: ''
}

export default function (state = initState, action) {
  switch (action.type) {
    case SAVE_CALL:
      return {
        ...state,
      }
    case SAVE_CALL_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

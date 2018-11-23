import { CHANGE_AUTH, AUTH_USER, AUTH_ERROR } from "../actions/AuctActions";

const initState = {
  authenticated: '',
  errorMessage: ''
}

export default function (state = initState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload
      }
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}

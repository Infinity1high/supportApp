const URL = "http://localhost:8080";

export const GET_CALLS = "GET_CALLS";
export const GET_CALLS_ERROR = "GET_CALLS_ERROR";

export function getAllCalls(page = 1) {
  return dispatch => {
    fetch(`${URL}/calls`, { qs: { page } })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: GET_CALLS,
          payload: res
        });
      })
      .catch(err => {
        dispatch({
          type: GET_CALLS_ERROR,
          payload: err
        });
      });
  };
}

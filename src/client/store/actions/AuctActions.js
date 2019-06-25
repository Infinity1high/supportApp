const URL = "http://localhost:8080";

export const CHANGE_AUTH = "CHANGE_AUTH";
export const AUTH_USER = "AUTH_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export function login({ loginEmail, loginPassword }, callback) {
  return dispatch => {
    fetch(`${URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword
      })
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.token
        });
        localStorage.setItem("token", res.token);
        callback();
      })
      .catch(err => {
        dispatch({
          type: AUTH_ERROR,
          payload: "Sorry, wrong credentials"
        });
      });
  };
}

export function logout({}) {
  localStorage.clearItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
}

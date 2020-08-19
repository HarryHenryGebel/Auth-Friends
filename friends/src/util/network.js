import requester from "easier-requests";

import {
  store,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_LOGGED_IN,
} from "../reducer.js";

let headers;

export function login(username, password, history) {
  return function (dispatch) {
    async function _login() {
      try {
        const id = requester.createUniqueID();
        await requester.post("http://localhost:5000/api/login", id, {
          username: username,
          password: password,
        });

        const token = requester.response(id).data.payload;
        headers = { Authorization: token };
        localStorage.setItem("Authorization", JSON.stringify(headers));
        requester.setOptions({ headers: headers });
        dispatch({ type: LOGIN_SUCCESS });
        window.open("/friends");
      } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAILURE, error: error });
      }
    }
    dispatch({ type: LOGIN });
    _login();
  };
}

function _inititalizeNetwork() {
  headers = JSON.parse(localStorage.getItem("Authorization"));
  store.dispatch({ type: SET_LOGGED_IN, state: headers ? true : false });
}

_inititalizeNetwork();

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const LOGIN = "LOGIN",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  SET_LOGGED_IN = "SET_LOGIN";

const initialState = {
  // see if we have a saved token
  loggedIn: false,
  loggingIn: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: false, loggingIn: true };
    case LOGIN_FAILURE:
      return { ...state, loggedIn: false, loggingIn: false };
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: true, loggingIn: false };
    case SET_LOGGED_IN:
      return { ...state, loggedIn: action.state };
    default:
      // return state if called by redux, otherwise throw error
      if (action.type.includes("@@redux")) return state;
      else throw Error(`Invalid action "{$action.type}"`);
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));

import { store, SET_LOGGED_IN } from "../reducer.js";

let token;

export default function login(username, password) {}

function _inititalizeNetwork() {
  token = JSON.parse(localStorage.getItem("token"));
  store.dispatch({ type: SET_LOGGED_IN, state: token ? true : false });
}

_inititalizeNetwork();

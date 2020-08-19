let token;
const LOGIN = "LOGIN";

const initialState = {
  loggedIn: false,
  isLoggingIn: false,
};

export default function login(username, password) {}

function _inititalizeNetwork() {
  token = JSON.parse(localStorage.getItem("token"));
}

_inititalizeNetwork();

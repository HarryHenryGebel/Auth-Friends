let token;
const LOGIN = "LOGIN";

const initialState = {
  loggedIn: false,
  isLoggingIn: false,
};

export default function login(username, password) {}

export function inititalizeNetwork() {
  token = JSON.parse(localStorage.getItem("token"));
  debugger;
}

let token;

export default function login(username, password) {}

function _inititalizeNetwork() {
  token = JSON.parse(localStorage.getItem("token"));
}

_inititalizeNetwork();

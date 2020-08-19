export const LOGIN = "LOGIN",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGIN_SUCCESS = "LOGIN_SUCCESS";

const initialState = {
  loggedIn: false,
  loggingIn: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: false, loggingIn: true };
    case LOGIN_FAILURE:
      return { ...state, loggedIn: false, loggingIn: false };
    case LOGIN:
      return { ...state, loggedIn: true, loggingIn: false };
    default:
      // return state if called by redux, otherwise throw error
      if (action.type.includes("@@redux")) return state;
      else throw Error(`Invalid action "{$action.type}"`);
  }
}

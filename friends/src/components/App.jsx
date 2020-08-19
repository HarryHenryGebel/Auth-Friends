import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Friends from "./Friends";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/friends" component={Friends} />
        <Route path="/">
          <Redirect to="/friends" />
        </Route>
      </Switch>
    </Router>
  );
}

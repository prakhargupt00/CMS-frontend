import React from "react";
import { Route } from "react-router-dom";

import Login from "./login.js";
import App from "./App.js";

export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={Login} /> */}
    <Route path="/some/where" component={Login} />
  </Route>
);

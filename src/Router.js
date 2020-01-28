import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Home from "./pages/Home"

import Users from "./pages/Users";
import User from "./pages/User";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Switch>
          <Route path="/users/:id" component={User} />
          <Route path="/users" component={Users} />
        </Switch>
      </Switch>
    </BrowserRouter>
  )
}

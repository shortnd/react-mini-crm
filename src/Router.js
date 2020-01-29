import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Home from "./pages/Home"

import Users from "./pages/Users";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Switch>
          <Route path="/users/create" component={CreateUser} />
          <Route path="/users/:id" component={User} />
          <Route path="/users" component={Users} />
        </Switch>
      </Switch>
    </BrowserRouter>
  )
}

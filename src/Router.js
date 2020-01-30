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
import EditUser from "./pages/EditUser";
import DeleteUser from "./pages/DeleteUser";

import Companies from "./pages/Companies";
import Company from "./pages/Company";
import CreateCompany from "./pages/CompanyCreate";
import EditCompany from "./pages/EditCompany";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Switch>
        <Route path="/users" component={Users} exact />
        <Route path="/users/create" component={CreateUser} />
        <Route path="/users/:id/delete" component={DeleteUser} />
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id" component={User} />
      </Switch>
      <Switch>
        <Route path="/companies" component={Companies} exact />
        <Route path='/companies/create' component={CreateCompany} />
        <Route path="/companies/:id/edit" component={EditCompany} />
        <Route path="/companies/:id" component={Company} />
      </Switch>
    </BrowserRouter>
  )
}

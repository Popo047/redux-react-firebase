import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard";
import ProjectDetails from "../projects/ProjectDetails";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import CreateProject from "../projects/CreateProject";
import Navbar from "../layout/Navbar";

function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/dash" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/createproject" component={CreateProject} />
      </Switch>
    </div>
  );
}

export default Routes;

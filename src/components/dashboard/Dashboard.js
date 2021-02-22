import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash container">
        <div className="row">
          {/* Project List */}
          <div className="col s12 m6">
            <ProjectList />
          </div>
          {/*Notificaiton List  */}
          <div className=" col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

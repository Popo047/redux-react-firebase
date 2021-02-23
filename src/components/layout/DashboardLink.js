import React from "react";
import { NavLink } from "react-router-dom";

function DashboardLink() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashboardLink;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>

      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn-floating btn-large waves-effect waves-light green"
        >
          PO
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;

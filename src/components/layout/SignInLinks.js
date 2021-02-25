import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/Actions/authActionC";

const SignedInLinks = (props) => {
  // props.signOut();
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>

      <li>
        <a onClick={props.signOut}>Logout</a>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
